import { getDcService, createDcService } from '#src/services/backend.service.js';

export const createDc = async (req, res, next) => {
  const response = await createDcService(req);
  if (!response.data) {
    return res.status(400).json({ message: 'Error' });
  }

  // res.status(201).json({ message: response.data.message, content: response.data.content });
  // if (!response.data.jwt) {
  //   return res.status(400).json({ message: 'Token not provided' });
  // }

  req.session.regenerate(function (err) {
    if (err) next(err);

    // req.session.jwt = response.data.jwt;

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};

export const getDc = async (req, res, next) => {
  const response = await getDcService(req);
  if (!response.data) {
    return res.status(400).json({ message: 'Error' });
  }
  // if (!response.data.jwt) {
  //   return res.status(401).json({ message: 'Invalid credentials', user: {} });
  // }

  req.session.regenerate(function (err) {
    if (err) return next(err);

    // req.session.jwt = response.data.jwt;

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
