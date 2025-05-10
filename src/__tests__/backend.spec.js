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
}));

const { createDc, getDc, getAllDc, updateDc, deleteDc } = await import('#src/controllers/backend.controller.js');
const { createRooms, getRoom, updateRoom, deleteRoom } = await import('#src/controllers/backend.controller.js');
const { createRacks, getRack, updateRack, deleteRack } = await import('#src/controllers/backend.controller.js');

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
