require('dotenv').config();
const models = require('../models/User');
// const axios = require('axios');
const { User, Keyword } = require('../models');
const { where } = require('sequelize');
const { notFound, success, validationError } = require('../utils/common');

exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findOne({
      where: { id: userId },
      attributes: ['email'],
    });
    res.render('profile_setting', {
      email: user.email,
      userId,
    });
  } catch (err) {
    serverError(res, err, 'profile error');
  }
};

exports.editProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { nickname, photo } = req.body;
    if (!nickname && !photo) {
      return res.status(400).json({ error: '변경할 데이터가 없습니다.' });
    }
    const updateUser = await User.update(
      {
        nickname: nickname,
        profile_image: photo,
      },
      { where: { id: userId } },
    );
    const user = await User.findOne({
      where: { id: userId },
      attributes: ['nickname', 'profile_image'],
    });

    res.status(200).json({
      message: '프로필이 성공적으로 업데이트되었습니다.',
      nickname: user.nickname,
      profile_img: user.profile_image,
    });
  } catch (err) {
    notFound(res, err, 'Not Found Error', '프로필 업데이트 실패!');
  }
};

exports.uploadPhoto = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return notFound(
        res,
        err,
        'uploadphoto error',
        '업로드 할 파일이 없습니다!',
      );
    }
    res.status(200).json({ photo: req.file.filename });
  } catch (err) {
    notFound(
      res,
      err,
      'controller uploadphoto error>',
      '업로드할 파일이 없습니다!',
    );
  }
};

exports.getResetPw = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findOne({
      where: { id: userId },
      attributes: ['pw', 'email'],
    });
    res.render('change_pw', {
      password: user.pw,
      email: user.email,
    });
  } catch (err) {
    serverError(res, err, '비밀번호 변경 페이지 로딩 에러');
  }
};

exports.resetPw = async (req, res) => {
  try {
    const { currentPw, newPw } = req.body;
    const userId = req.user.id;

    const user = await User.findOne({ where: { id: userId } });

    if (user.pw !== currentPw) {
      return validationError(
        res,
        err,
        'Validation Error',
        '입력값이 올바르지 않습니다',
      );
    }

    await User.update({ pw: newPw }, { where: { id: userId } });

    success(res, '비밀번호 변경 성공', '비밀번호가 성공적으로 변경되었습니다.');
  } catch (err) {
    console.error(err);
    serverError(res, err);
  }
};

exports.getDeleteAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findOne({
      where: { id: userId },
      attributes: ['pw'],
    });
    res.render('delete_account', {
      password: user.pw,
    });
  } catch (err) {
    serverError(res, err);
  }
};

const jwt = require('jsonwebtoken');

exports.deleteAccount = async (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    return validationError(
      res,
      err,
      'Validation Error',
      '사용자 인증 정보가 필요합니다.',
    );
  }

  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return notFound(res, err, 'Not Found User', '사용자를 찾을 수 없습니다.');
    }

    await user.destroy();

    req.session.destroy((err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: '세션 삭제 오류 발생', error: err });
      }

      res.clearCookie('connect.sid');
      console.log('세션이 성공적으로 삭제되었습니다.');
      return success(
        res,
        '회원 탈퇴가 완료',
        '회원 탈퇴가 완료되었습니다. 다음에 더 좋은 모습으로 만나요!',
      );
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: '회원 탈퇴 중 오류 발생', error: err.message });
  }
};
// exports.deleteAccount = async (req, res) => {
//   const userId = req.user.id;
//   // const accessToken = req.session.accessToken;

//   if (!userId) {
//     return res.status(400).json({
//       message: '사용자 인증 정보가 필요합니다.',
//     });
//   }

//   try {
//     // 사용자 정보 가져오기
//     const user = await User.findOne({ where: { id: userId } });
//     if (!user) {
//       return res.status(404).json({
//         message: '사용자를 찾을 수 없습니다.',
//       });
//     }

//     // 카카오 연결 끊기
//     if (user.kakao_id) {
//       try {
//         const kakaoUnlinkResponse = await axios.post(
//           'https://kapi.kakao.com/v1/user/unlink',
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`, // Admin 키 사용
//             },
//           },
//         );

//         console.log('Kakao unlink response:', kakaoUnlinkResponse.data);
//       } catch (error) {
//         console.error('Kakao unlink error:', error.response?.data || error);
//         // 확인용
//         console.log('Kakao unlink error details:', error.response?.data);
//         console.log(
//           'Authorization Header:',
//           `KakaoAK ${process.env.KAKAO_ADMIN_KEY}`,
//         );

//         return res.status(500).json({
//           message: '카카오 연결 끊기 중 오류가 발생했습니다.',
//         });
//       }
//     }

//     // DB에서 사용자 삭제
//     await user.destroy();

//     // 세션 삭제
//     req.session.destroy((err) => {
//       if (err) {
//         console.error('세션 삭제 오류:', err);
//         return res.status(500).json({
//           message: '세션 삭제 중 오류가 발생했습니다.',
//         });
//       }

//       res.clearCookie('connect.sid');
//       return res.status(200).json({
//         message: '회원 탈퇴가 완료되었습니다. 다음에 더 좋은 모습으로 만나요!',
//       });
//     });
//   } catch (err) {
//     console.error('회원 탈퇴 오류:', err);
//     return res.status(500).json({
//       message: '회원 탈퇴 중 오류가 발생했습니다.',
//       error: err.message,
//     });
//   }
// };

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: '세션 삭제 오류 발생', error: err });
    }
    console.log('세션이 성공적으로 삭제되었습니다.');
    success(res, '로그아웃 성공', '로그아웃 되었습니다!');
  });
};
