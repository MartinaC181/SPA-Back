const { config } = require('dotenv');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
const passport = require('passport');

config();

const emails = ['martiinacanteros@gmail.com']

passport.use("auth-google",new GoogleStrategy(
    {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'https://spa-sentirse-bien-one.vercel.app/',
    scope: [ 'profile' ],
  },
  function (accessToken, refreshToken, profile, done) {
    console.log('profile', profile);
    const response = emails.includes(profile.emails[0].value);

    if (response) {
        done(null, profile);
    }else {
        emails.push(profile.emails[0].value);
        done(null, false, { message: 'Unauthorized' });
    }
  }
));