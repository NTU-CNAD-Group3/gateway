import { jest } from '@jest/globals';
const serviceNames = [
  'createDcService',
  'getDcService',
  'getAllDcService',
  'updateDcService',
  'deleteDcService',
  'createRoomsService',
  'getRoomService',
  'updateRoomService',
  'deleteRoomService',
  'createRacksService',
  'getRackService',
  'updateRackService',
  'deleteRackService',
  'getServerService',
  'createServerService',
  'repairService',
  'deleteServerService',
  'getAllServerService',
  'brokenService',
  'getAllBrokenService',
  'searchingServerService',
  'movingServerService',
  'updateServerByNameService',
  'createIpPoolService',
  'getAllIpService',
  'getUsedIpService',
  'getIpPoolService',
  'getAllIpPoolsService',
];

// 將所有 service 名稱對應成 jest.fn()
const backendServiceMocks = Object.fromEntries(serviceNames.map((name) => [name, jest.fn()]));

await jest.unstable_mockModule('#src/services/backend.service.js', () => backendServiceMocks);

// 匯入 controller（要等 mock 完成後再 import）
const controller = await import('#src/controllers/backend.controller.js');

// 共用模擬物件
const mockReq = { body: {}, params: {}, query: {} };
const mockRes = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const mockNext = jest.fn();

// helper：建立單個測試案例
const createTest = (fnName, serviceName, statusCode = 200) => {
  test(`${fnName} should return ${statusCode}`, async () => {
    const mockData = { data: { message: `${fnName} success` } };
    backendServiceMocks[serviceName].mockResolvedValueOnce(mockData);

    await controller[fnName](mockReq, mockRes, mockNext);

    expect(backendServiceMocks[serviceName]).toHaveBeenCalledWith(mockReq);
    expect(mockRes.status).toHaveBeenCalledWith(statusCode);
    expect(mockRes.json).toHaveBeenCalledWith(mockData.data);
  });
};

// 所有 controller 對應的測試
const tests = [
  ['createDc', 'createDcService', 201],
  ['getDc', 'getDcService'],
  ['getAllDc', 'getAllDcService'],
  ['updateDc', 'updateDcService'],
  ['deleteDc', 'deleteDcService'],
  ['createRooms', 'createRoomsService', 201],
  ['getRoom', 'getRoomService'],
  ['updateRoom', 'updateRoomService'],
  ['deleteRoom', 'deleteRoomService'],
  ['createRacks', 'createRacksService', 201],
  ['getRack', 'getRackService'],
  ['updateRack', 'updateRackService'],
  ['deleteRack', 'deleteRackService'],
  ['createServer', 'createServerService', 201],
  ['getServer', 'getServerService'],
  ['updateServerName', 'updateServerByNameService'],
  ['movingServer', 'movingServerService'],
  ['repairServer', 'repairService'],
  ['brokeServer', 'brokenService'],
  ['deleteServer', 'deleteServerService'],
  ['getAllServer', 'getAllServerService'],
  ['getAllBrokenServer', 'getAllBrokenService'],
  ['searchingServer', 'searchingServerService'],
  ['createIpPool', 'createIpPoolService', 201],
  ['getAllIp', 'getAllIpService'],
  ['getUsedIp', 'getUsedIpService'],
  ['getIpPool', 'getIpPoolService'],
  ['getAllIpPools', 'getAllIpPoolsService'],
];

// 逐一產生測試
describe('backend.controller.js', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  tests.forEach(([fnName, serviceName, statusCode]) => {
    createTest(fnName, serviceName, statusCode ?? 200);
  });
});
