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
export const createServer = async (req, res, next) => {
  const response = await backendService.createServerService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};
export const getServer = async (req, res, next) => {
  const response = await backendService.getServerService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const updateServer = async (req, res, next) => {
  const response = await backendService.updateServerService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const deleteServer = async (req, res, next) => {
  const response = await backendService.deleteServerService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getAllServer = async (req, res, next) => {
  const response = await backendService.getAllServerService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getServerByName = async (req, res, next) => {
  const response = await backendService.getServerByNameService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getServerByIp = async (req, res, next) => {
  const response = await backendService.getServerByIpService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getAllServerByService = async (req, res, next) => {
  const response = await backendService.getServerByServiceService(req);
  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const assign = async (req, res, next) => {
  const response = await backendService.assignService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};
export const createIpPool = async (req, res, next) => {
  const response = await backendService.createIpPoolService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(201).json(response.data);
    });
  });
};
export const release = async (req, res, next) => {
  const response = await backendService.releaseService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getAllIp = async (req, res, next) => {
  const response = await backendService.getAllIpService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getUsedIp = async (req, res, next) => {
  const response = await backendService.getUsedIpService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getIpPool = async (req, res, next) => {
  const response = await backendService.getIpPoolService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
export const getAllIpPools = async (req, res, next) => {
  const response = await backendService.getAllIpPoolsService(req);

  req.session.regenerate(function (err) {
    if (err) return next(err);

    req.session.save(function (err) {
      if (err) return next(err);
      res.status(200).json(response.data);
    });
  });
};
