import { signinService, signupService, verifyEmailService } from '@/services/auth.service.js';

export const signup = async (req, res, next) => {
  const response = await signupService(req);

  if (!response.data.jwt) {
    return res.status(400).json({ message: 'Token not provided' });
  }

  req.session.regenerate(function (err) {
    if (err) next(err);

    req.session.jwt = response.data.jwt;

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json({ message: response.data.message, user: response.data.user });
    });
  });
};

export const signin = async (req, res, next) => {
  const response = await signinService(req);

  if (!response.data.jwt) {
    return res.status(401).json({ message: 'Invalid credentials', user: {} });
  }

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.jwt = response.data.jwt;

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json({ message: response.data.message, user: response.data.user });
    });
  });
};

export const signout = async (req, res, next) => {
  req.session.jwt = null;
  req.session.save(function (err) {
    if (err) return next(err);

    req.session.regenerate(function (err) {
      if (err) return next(err);
      res.status(200).json({ message: 'Sign out successful.', user: {} });
    });
  });
};

export const verifyEmail = async (req, res) => {
  const response = await verifyEmailService(req);

  if (response.status !== 200) {
    return res.status(400).json({ message: response.data.message });
  }

  res.status(200).json({ message: response.data.message });
};
