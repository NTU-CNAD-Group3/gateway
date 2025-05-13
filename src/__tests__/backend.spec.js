import { jest } from '@jest/globals';
const createDcService = jest.fn();
const getDcService = jest.fn();
const getAllDcService = jest.fn();
const updateDcService = jest.fn();
const deleteDcService = jest.fn();
const createRoomsService = jest.fn();
const getRoomService = jest.fn();
const updateRoomService = jest.fn();
const deleteRoomService = jest.fn();
const createRacksService = jest.fn();
const getRackService = jest.fn();
const updateRackService = jest.fn();
const deleteRackService = jest.fn();
const getServerService = jest.fn();
const createServerService = jest.fn();
const updateServerService = jest.fn();
const deleteServerService = jest.fn();
const getAllServerService = jest.fn();
const getServerByNameService = jest.fn();
const getServerByIpService = jest.fn();
const getServerByServiceService = jest.fn();
const assignService = jest.fn();
const createIpPoolService = jest.fn();
const releaseService = jest.fn();
const getAllIpService = jest.fn();
const getUsedIpService = jest.fn();
const getIpPoolService = jest.fn();
const getAllIpPoolsService = jest.fn();

await jest.unstable_mockModule('#src/services/backend.service.js', () => ({
  createDcService,
  getDcService,
  getAllDcService,
  updateDcService,
  deleteDcService,
  createRoomsService,
  getRoomService,
  updateRoomService,
  deleteRoomService,
  createRacksService,
  getRackService,
  updateRackService,
  deleteRackService,
  getServerService,
  createServerService,
  updateServerService,
  deleteServerService,
  getAllServerService,
  getServerByNameService,
  getServerByIpService,
  getServerByServiceService,
  assignService,
  createIpPoolService,
  releaseService,
  getAllIpService,
  getUsedIpService,
  getIpPoolService,
  getAllIpPoolsService,
}));

const { createDc, getDc, getAllDc, updateDc, deleteDc } = await import('#src/controllers/backend.controller.js');
const { createRooms, getRoom, updateRoom, deleteRoom } = await import('#src/controllers/backend.controller.js');
const { createRacks, getRack, updateRack, deleteRack } = await import('#src/controllers/backend.controller.js');
const { getServer, createServer, updateServer, deleteServer, getAllServer, getServerByName, getServerByIp, getAllServerByService } =
  await import('#src/controllers/backend.controller.js');
const { assign, createIpPool, release, getAllIp, getUsedIp, getIpPool, getAllIpPools } = await import(
  '#src/controllers/backend.controller.js'
);

const mockReq = () => ({
  session: {
    regenerate: jest.fn((cb) => cb(null)),
    save: jest.fn((cb) => cb(null)),
  },
});

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const next = jest.fn();

describe('DC Controllers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('createDc should respond with 201 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1 } };
    createDcService.mockResolvedValue(mockData);

    await createDc(req, res, next);

    expect(createDcService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('getDc should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1 } };
    getDcService.mockResolvedValue(mockData);

    await getDc(req, res, next);

    expect(getDcService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('getAllDc should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: [{ id: 1 }, { id: 2 }] };
    getAllDcService.mockResolvedValue(mockData);

    await getAllDc(req, res, next);

    expect(getAllDcService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('updateDc should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'updated' } };
    updateDcService.mockResolvedValue(mockData);

    await updateDc(req, res, next);

    expect(updateDcService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('deleteDc should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { success: true } };
    deleteDcService.mockResolvedValue(mockData);

    await deleteDc(req, res, next);

    expect(deleteDcService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('createDc should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    createDcService.mockResolvedValue({ data: {} });

    await createDc(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('createDc should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    createDcService.mockResolvedValue({ data: {} });

    await createDc(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
});
describe('Room Controllers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('createRooms should respond with 201 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Room 1' } };
    createRoomsService.mockResolvedValue(mockData);

    await createRooms(req, res, next);

    expect(createRoomsService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('getRoom should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Room 1' } };
    getRoomService.mockResolvedValue(mockData);

    await getRoom(req, res, next);

    expect(getRoomService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('updateRoom should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Updated Room' } };
    updateRoomService.mockResolvedValue(mockData);

    await updateRoom(req, res, next);

    expect(updateRoomService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('deleteRoom should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { success: true } };
    deleteRoomService.mockResolvedValue(mockData);

    await deleteRoom(req, res, next);

    expect(deleteRoomService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('createRooms should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    createRoomsService.mockResolvedValue({ data: {} });

    await createRooms(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('createRooms should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    createRoomsService.mockResolvedValue({ data: {} });

    await createRooms(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('getRoom should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getRoomService.mockResolvedValue({ data: {} });

    await getRoom(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('getRoom should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getRoomService.mockResolvedValue({ data: {} });

    await getRoom(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('updateRoom should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    updateRoomService.mockResolvedValue({ data: {} });

    await updateRoom(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('updateRoom should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    updateRoomService.mockResolvedValue({ data: {} });

    await updateRoom(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('deleteRoom should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    deleteRoomService.mockResolvedValue({ data: {} });

    await deleteRoom(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('deleteRoom should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    deleteRoomService.mockResolvedValue({ data: {} });

    await deleteRoom(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
});
describe('Rack Controllers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('createRacks should respond with 201 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Rack 1' } };
    createRacksService.mockResolvedValue(mockData);

    await createRacks(req, res, next);

    expect(createRacksService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('getRack should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Rack 1' } };
    getRackService.mockResolvedValue(mockData);

    await getRack(req, res, next);

    expect(getRackService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('updateRack should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Updated Rack' } };
    updateRackService.mockResolvedValue(mockData);

    await updateRack(req, res, next);

    expect(updateRackService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('deleteRack should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { success: true } };
    deleteRackService.mockResolvedValue(mockData);

    await deleteRack(req, res, next);

    expect(deleteRackService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('createRacks should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    createRacksService.mockResolvedValue({ data: {} });

    await createRacks(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('createRacks should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    createRacksService.mockResolvedValue({ data: {} });

    await createRacks(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('getRack should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getRackService.mockResolvedValue({ data: {} });

    await getRack(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('getRack should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getRackService.mockResolvedValue({ data: {} });

    await getRack(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('updateRack should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    updateRackService.mockResolvedValue({ data: {} });

    await updateRack(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('updateRack should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    updateRackService.mockResolvedValue({ data: {} });

    await updateRack(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('deleteRack should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    deleteRackService.mockResolvedValue({ data: {} });

    await deleteRack(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });

  test('deleteRack should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    deleteRackService.mockResolvedValue({ data: {} });

    await deleteRack(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
});

describe('Server Controllers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getServer should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Server 1' } };
    getServerService.mockResolvedValue(mockData);

    await getServer(req, res, next);

    expect(getServerService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('createServer should respond with 201 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Server 1' } };
    createServerService.mockResolvedValue(mockData);

    await createServer(req, res, next);

    expect(createServerService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('updateServer should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Updated Server' } };
    updateServerService.mockResolvedValue(mockData);

    await updateServer(req, res, next);

    expect(updateServerService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('deleteServer should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Updated Server' } };
    deleteServerService.mockResolvedValue(mockData);

    await deleteServer(req, res, next);

    expect(deleteServerService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('getAllServer should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: [{ id: 1 }, { id: 2 }] };
    getAllServerService.mockResolvedValue(mockData);

    await getAllServer(req, res, next);

    expect(getAllServerService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });
  test('getServer should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getServerService.mockResolvedValue({ data: {} });

    await getServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getServer should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getServerService.mockResolvedValue({ data: {} });

    await getServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('createServer should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    createServerService.mockResolvedValue({ data: {} });

    await createServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('createServer should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    createServerService.mockResolvedValue({ data: {} });

    await createServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('updateServer should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    updateServerService.mockResolvedValue({ data: {} });

    await updateServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('updateServer should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    updateServerService.mockResolvedValue({ data: {} });

    await updateServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('deleteServer should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    deleteServerService.mockResolvedValue({ data: {} });

    await deleteServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('deleteServer should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    deleteServerService.mockResolvedValue({ data: {} });

    await deleteServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getAllServer should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getAllServerService.mockResolvedValue({ data: {} });

    await getAllServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getAllServer should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getAllServerService.mockResolvedValue({ data: {} });

    await getAllServer(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getServerByName should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getServerByNameService.mockResolvedValue({ data: {} });

    await getServerByName(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getServerByName should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getServerByNameService.mockResolvedValue({ data: {} });

    await getServerByName(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getServerByIp should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getServerByIpService.mockResolvedValue({ data: {} });

    await getServerByIp(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getServerByIp should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getServerByIpService.mockResolvedValue({ data: {} });

    await getServerByIp(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getAllServerByService should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getServerByServiceService.mockResolvedValue({ data: {} });

    await getAllServerByService(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getAllServerByService should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getServerByServiceService.mockResolvedValue({ data: {} });

    await getAllServerByService(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
});

describe('IP Controllers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('assign should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = ['10.0.0.1', 1];
    assignService.mockResolvedValue(mockData);

    await assign(req, res, next);

    expect(assignService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('createIpPool should respond with 201 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, cidr: '10.0.0.0/24' } };
    createIpPoolService.mockResolvedValue(mockData);

    await createIpPool(req, res, next);

    expect(createIpPoolService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('release should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = '10.0.0.1';
    releaseService.mockResolvedValue(mockData);

    await release(req, res, next);

    expect(releaseService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('getAllIp should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: [{ id: 1 }, { id: 2 }] };
    getAllIpService.mockResolvedValue(mockData);

    await getAllIp(req, res, next);

    expect(getAllIpService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('getUsedIp should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: [{ id: 1 }, { id: 2 }] };
    getUsedIpService.mockResolvedValue(mockData);

    await getUsedIp(req, res, next);

    expect(getUsedIpService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });

  test('getIpPool should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, cidr: '10.0.0.0/24' } };
    getIpPoolService.mockResolvedValue(mockData);

    await getIpPool(req, res, next);

    expect(getIpPoolService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });
  test('getAllIpPools should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: [{ id: 1 }, { id: 2 }] };
    getAllIpPoolsService.mockResolvedValue(mockData);

    await getAllIpPools(req, res, next);

    expect(getAllIpPoolsService).toHaveBeenCalledWith(req);
    expect(req.session.regenerate).toHaveBeenCalled();
    expect(req.session.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });
  test('assign should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    assignService.mockResolvedValue({ data: {} });

    await assign(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('assign should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    assignService.mockResolvedValue({ data: {} });

    await assign(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('createIpPool should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    createIpPoolService.mockResolvedValue({ data: {} });

    await createIpPool(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('createIpPool should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    createIpPoolService.mockResolvedValue({ data: {} });

    await createIpPool(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('release should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    releaseService.mockResolvedValue({ data: {} });

    await release(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('release should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    releaseService.mockResolvedValue({ data: {} });

    await release(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getAllIp should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getAllIpService.mockResolvedValue({ data: {} });

    await getAllIp(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getAllIp should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getAllIpService.mockResolvedValue({ data: {} });

    await getAllIp(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getUsedIp should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getUsedIpService.mockResolvedValue({ data: {} });

    await getUsedIp(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getUsedIp should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getUsedIpService.mockResolvedValue({ data: {} });

    await getUsedIp(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getIpPool should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getIpPoolService.mockResolvedValue({ data: {} });

    await getIpPool(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getIpPool should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getIpPoolService.mockResolvedValue({ data: {} });

    await getIpPool(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getAllIpPools should call next on regenerate error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Regenerate error');
    req.session.regenerate = jest.fn((cb) => cb(err));
    getAllIpPoolsService.mockResolvedValue({ data: {} });

    await getAllIpPools(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
  test('getAllIpPools should call next on save error', async () => {
    const req = mockReq();
    const res = mockRes();
    const err = new Error('Save error');
    req.session.save = jest.fn((cb) => cb(err));
    getAllIpPoolsService.mockResolvedValue({ data: {} });

    await getAllIpPools(req, res, next);

    expect(next).toHaveBeenCalledWith(err);
  });
});
