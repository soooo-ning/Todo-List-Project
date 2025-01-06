const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models');
require('dotenv').config();

let host;
if (process.env.NODE_ENV === 'production') {
  host = process.env.PROD_HOST;
} else {
  host = process.env.LOCAL_HOST;
}

const passportConfig = (app) => {
  // Passport 초기화
  app.use(passport.initialize());
  app.use(passport.session());

  // 카카오 OAuth 전략 설정
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_APP_KEY,
        clientSecret: process.env.KAKAO_APP_SECRET,
        callbackURL: `http://${host}:8080/auth/kakao/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        const kakao_id = profile.id;
        const email = profile._json.kakao_account.email;

        try {
          const existingUser = await User.findOne({ where: { kakao_id } });

          if (existingUser) {
            return done(null, existingUser);
          }

          const newUser = await User.create({
            nickname: profile.displayName,
            kakao_id,
            google_id: null,
            profile_image: profile._json.properties.profile_image,
            email,
            pw: 'defaultPassword',
          });

          done(null, newUser);
        } catch (error) {
          done(error);
        }
      },
    ),
  );

  // 구글 OAuth 전략 설정
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `http://${host}:8080/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const existingUser = await User.findOne({
            where: { google_id: profile.id },
          });

          if (existingUser) {
            return done(null, existingUser);
          }

          const newUser = await User.create({
            nickname: profile.displayName,
            kakao_id: null,
            google_id: profile.id,
            email: profile._json.email,
            pw: 'defaultPassword',
          });

          done(null, newUser);
        } catch (error) {
          done(error);
        }
      },
    ),
  );

  // 사용자 직렬화
  passport.serializeUser((user, done) => {
    if (!user) {
      return done(new Error('User is not defined'));
    }
    done(null, user.id);
  });

  // 사용자 역직렬화
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};

module.exports = passportConfig;
