import { jest } from '@jest/globals';

// 模擬 config 常數
await jest.unstable_mockModule('#src/config.js', () => ({
  default: {
    GET_DC: '/dc',
    CREATE_DC: '/dc/create',
    GET_ALL_DC: '/dc/all',
    UPDATE_DC: '/dc/update',
    DELETE_DC: '/dc/delete',
    GET_ROOM: '/room',
    CREATE_ROOMS: '/room/create',
    UPDATE_ROOM: '/room/update',
    DELETE_ROOM: '/room/delete',
    GET_RACK: '/rack',
    CREATE_RACKS: '/rack/create',
    UPDATE_RACK: '/rack/update',
    DELETE_RACK: '/rack/delete',
    GET_SERVER: '/server',
    CREATE_SERVER: '/server/create',
    UPDATE_BY_NAME: '/server/updateName',
    MOVE_SERVER: '/server/move',
    REPAIR: '/server/repair',
    BROKEN: '/server/broken',
    DELETE_SERVER: '/server/delete',
    GET_ALL_SERVER: '/server/all',
    SEARCHING_SERVER: '/server/search',
    GET_ALL_BROKEN_SERVER: '/server/broken/all',
    ASSIGN_IP: '/ip/assign',
    CREATE_IP_POOL: '/ip/createPool',
    RELEASE_IP: '/ip/release',
    GET_ALL_IP: '/ip/all',
    GET_USED_IP: '/ip/used',
    GET_IP_POOL: '/ip/pool',
  },
}));

// 模擬 axios instance 和 .create 回傳的客製 axios
const mockAxios = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};
const mockCreate = jest.fn(() => mockAxios);

await jest.unstable_mockModule('#src/utils/axios.js', () => ({
  default: { create: mockCreate },
}));

// 匯入 service
const service = await import('#src/services/backend.service.js');
const config = (await import('#src/config.js')).default;

const mockReq = {
  body: { key: 'value' },
  query: { q: 'search' },
};

describe('backend.service.js', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const getTests = [
    ['getDcService', config.GET_DC, 'get', { params: mockReq.query }],
    ['getAllDcService', config.GET_ALL_DC, 'get', mockReq.body],
    ['getRoomService', config.GET_ROOM, 'get', { params: mockReq.query }],
    ['getRackService', config.GET_RACK, 'get', { params: mockReq.query }],
    ['getServerService', config.GET_SERVER, 'get', { params: mockReq.query }],
    ['getAllServerService', config.GET_ALL_SERVER, 'get', mockReq.body],
    ['searchingServerService', config.SEARCHING_SERVER, 'get', { params: mockReq.query }],
    ['getAllBrokenService', config.GET_ALL_BROKEN_SERVER, 'get', { params: mockReq.query }],
    ['getAllIpService', config.GET_ALL_IP, 'get', mockReq.body],
    ['getUsedIpService', config.GET_USED_IP, 'get', mockReq.body],
    ['getIpPoolService', config.GET_IP_POOL, 'get', { params: mockReq.query }],
  ];

  const postTests = [
    ['createDcService', config.CREATE_DC, 'post'],
    ['createRoomsService', config.CREATE_ROOMS, 'post'],
    ['createRacksService', config.CREATE_RACKS, 'post'],
    ['createServerService', config.CREATE_SERVER, 'post'],
    ['assignService', config.ASSIGN_IP, 'post'],
    ['createIpPoolService', config.CREATE_IP_POOL, 'post'],
  ];

  const putTests = [
    ['updateDcService', config.UPDATE_DC],
    ['updateRoomService', config.UPDATE_ROOM],
    ['updateRackService', config.UPDATE_RACK],
    ['updateServerByNameService', config.UPDATE_BY_NAME],
    ['movingServerService', config.MOVE_SERVER],
    ['repairService', config.REPAIR],
    ['brokenService', config.BROKEN],
  ];

  const deleteTests = [
    ['deleteDcService', config.DELETE_DC],
    ['deleteRoomService', config.DELETE_ROOM],
    ['deleteRackService', config.DELETE_RACK],
    ['deleteServerService', config.DELETE_SERVER],
    ['releaseService', config.RELEASE_IP],
  ];

  getTests.forEach(([fnName, url, method, expectedPayload]) => {
    test(`${fnName} should call axios.${method} with ${url}`, async () => {
      mockAxios[method].mockResolvedValueOnce({ data: 'mocked response' });

      const result = await service[fnName](mockReq);

      expect(mockAxios[method]).toHaveBeenCalledWith(url, expectedPayload);
      expect(result.data).toBe('mocked response');
    });
  });

  postTests.forEach(([fnName, url]) => {
    test(`${fnName} should post to ${url}`, async () => {
      mockAxios.post.mockResolvedValueOnce({ data: 'mocked post' });

      const result = await service[fnName](mockReq);

      expect(mockAxios.post).toHaveBeenCalledWith(url, mockReq.body);
      expect(result.data).toBe('mocked post');
    });
  });

  putTests.forEach(([fnName, url]) => {
    test(`${fnName} should put to ${url}`, async () => {
      mockAxios.put.mockResolvedValueOnce({ data: 'mocked put' });

      const result = await service[fnName](mockReq);

      expect(mockAxios.put).toHaveBeenCalledWith(url, mockReq.body);
      expect(result.data).toBe('mocked put');
    });
  });

  deleteTests.forEach(([fnName, url]) => {
    test(`${fnName} should delete to ${url}`, async () => {
      mockAxios.delete.mockResolvedValueOnce({ data: 'mocked delete' });

      const result = await service[fnName](mockReq);

      expect(mockAxios.delete).toHaveBeenCalledWith(url, { data: mockReq.body });
      expect(result.data).toBe('mocked delete');
    });
  });
});
