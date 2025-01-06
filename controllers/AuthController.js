const { User } = require('../models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// 로그인 페이지 요청
exports.getSignIn = (req, res) => {
  res.render('sign-in');
};

// 회원가입 페이지 요청
exports.getSignUp = (req, res) => {
  res.render('sign-up');
};

// 비밀번호 찾기 페이지 요청
exports.getSearchPw = (req, res) => {
  res.render('search-pw');
};

// 로그인 메서드
exports.signIn = async (req, res) => {
  const { email, pw } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: '로그인 실패' });
    }

    if (pw !== user.pw) {
      return res.status(401).json({ message: '로그인 실패' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', {
      expiresIn: '24h',
    });

    req.session.user = {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
    };

    res.json({ token, nickname: user.nickname });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// JWT 토큰 처리 메서드
exports.jwtToken = (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res.status(400).json({ message: '토큰이 제공되지 않았습니다.' });
  }

  res.json({ token });
};

// 회원가입 메서드
exports.signUp = async (req, res) => {
  const { nickname, pw, email } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: '이미 존재하는 이메일입니다.' });
    }

    await User.create({ nickname, pw, email, profile_image: null });
    res.status(201).json({ message: '유저 등록 완료' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// 이메일 중복 확인 메서드
exports.duplicatedEmail = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(200).json({ message: '이메일이 이미 존재합니다.' });
    }

    res.status(200).json({ message: '사용 가능한 이메일입니다.' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// 비밀번호 찾기 요청 메서드
exports.searchPw = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).render('404');
    }

    const tempPassword = crypto.randomBytes(2).toString('hex');
    user.pw = tempPassword;
    await user.save();

    res.status(200).json({ success: true, tempPassword });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// 비밀번호 재설정 API 메서드
exports.resetPw = async (req, res) => {
  const { newPassword } = req.body;

  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    user.pw = newPassword;
    await user.save();

    res
      .status(200)
      .json({ message: '비밀번호가 성공적으로 재설정되었습니다.' });
  } catch (err) {
    return res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
};

// Google OAuth 요청
exports.signInGoogle = passport.authenticate('google', {
  scope: ['email', 'profile'],
});

// Google OAuth 콜백
exports.googleCallback = (req, res, next) => {
  passport.authenticate('google', (err, user) => {
    if (err) {
      return res.redirect('/');
    }
    if (!user) {
      return res.redirect('/');
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return res.redirect('/');
      }

      req.session.user = {
        id: user.id,
        nickname: user.nickname,
        email: user.email,
      };

      return res.redirect('/todo/dashboard');
    });
  })(req, res, next);
};

// Kakao OAuth 콜백
exports.kakaoCallback = (req, res, next) => {
  passport.authenticate('kakao', (err, user) => {
    if (err) {
      return res.redirect('/login');
    }
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return res.redirect('/login');
      }

      req.session.user = {
        id: user.id,
        nickname: user.nickname,
        email: user.email,
      };

      return res.redirect('/todo/dashboard');
    });
  })(req, res, next);
};
