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
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
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
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
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
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
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
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });
  
  test('getServerByName should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Updated Server' } };
    getServerByNameService.mockResolvedValue(mockData);

    await getServerByName(req, res, next);

    expect(getServerByNameService).toHaveBeenCalledWith(req);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });
  test('getServerByIp should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Updated Server' } };
    getServerByIpService.mockResolvedValue(mockData);

    await getServerByIp(req, res, next);

    expect(getServerByIpService).toHaveBeenCalledWith(req);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });
  test('getAllServerByService should respond with 200 and data', async () => {
    const req = mockReq();
    const res = mockRes();
    const mockData = { data: { id: 1, name: 'Updated Server' } };
    getServerByServiceService.mockResolvedValue(mockData);

    await getAllServerByService(req, res, next);

    expect(getServerByServiceService).toHaveBeenCalledWith(req);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
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
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.data);
  });
  
});
