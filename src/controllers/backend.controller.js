import * as backendService from '#src/services/backend.service.js';
export const createDc = async (req, res, next) => {
  const response = await backendService.createDcService(req);

  req.session.regenerate(function (err) {
    if (err) next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};

export const getDc = async (req, res, next) => {
  const response = await backendService.getDcService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getAllDc = async (req, res, next) => {
  const response = await backendService.getAllDcService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const updateDc = async (req, res, next) => {
  const response = await backendService.updateDcService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};

export const deleteDc = async (req, res, next) => {
  const response = await backendService.deleteDcService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};

export const createRooms = async (req, res, next) => {
  const response = await backendService.createRoomsService(req);

  req.session.regenerate(function (err) {
    if (err) next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};

export const getRoom = async (req, res, next) => {
  const response = await backendService.getRoomService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const updateRoom = async (req, res, next) => {
  const response = await backendService.updateRoomService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const deleteRoom = async (req, res, next) => {
  const response = await backendService.deleteRoomService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};

export const createRacks = async (req, res, next) => {
  const response = await backendService.createRacksService(req);

  req.session.regenerate(function (err) {
    if (err) next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};

export const getRack = async (req, res, next) => {
  const response = await backendService.getRackService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const updateRack = async (req, res, next) => {
  const response = await backendService.updateRackService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const deleteRack = async (req, res, next) => {
  const response = await backendService.deleteRackService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
