import {
  getDcService,
  createDcService,
  getAllDcService,
  updateDcService,
  deleteDcService,
  getRoomService,
  createRoomsService,
  updateRoomService,
  deleteRoomService,
} from '#src/services/backend.service.js';
export const createDc = async (req, res, next) => {
  const response = await createDcService(req);

  req.session.regenerate(function (err) {
    if (err) next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};

export const getDc = async (req, res, next) => {
  const response = await getDcService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getAllDc = async (req, res, next) => {
  const response = await getAllDcService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const updateDc = async (req, res, next) => {
  const response = await updateDcService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};

export const deleteDc = async (req, res, next) => {
  const response = await deleteDcService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};

export const createRooms = async (req, res, next) => {
  const response = await createRoomsService(req);

  req.session.regenerate(function (err) {
    if (err) next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};

export const getRoom = async (req, res, next) => {
  const response = await getRoomService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const updateRoom = async (req, res, next) => {
  const response = await updateRoomService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const deleteRoom = async (req, res, next) => {
  const response = await deleteRoomService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
