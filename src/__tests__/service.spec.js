import { jest } from '@jest/globals';
const mockGet = jest.fn();
const mockPost = jest.fn();
const mockPut = jest.fn();
const mockDelete = jest.fn();

await jest.unstable_mockModule('#src/utils/axios.js', () => ({
  default: {
    create: jest.fn(() => ({
      get: mockGet,
      post: mockPost,
      put: mockPut,
      delete: mockDelete,
    })),
  },
}));

await jest.unstable_mockModule('#src/config.js', () => ({
  default: {
    GET_DC: '/get-dc',
    CREATE_DC: '/create-dc',
    GET_ALL_DC: '/get-all-dc',
    UPDATE_DC: '/update-dc',
    DELETE_DC: '/delete-dc',
  },
}));

const {
  getDcService,
  createDcService,
  getAllDcService,
  updateDcService,
  deleteDcService,
} = await import('#src/services/backend.service.js');

describe('backend.service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getDcService should call axios.get with correct params', async () => {
    const req = { query: { id: 1 } };
    const fakeResponse = { data: { success: true } };
    mockGet.mockResolvedValue(fakeResponse);

    const result = await getDcService(req);

    expect(mockGet).toHaveBeenCalledWith('/get-dc', { params: req.query });
    expect(result).toBe(fakeResponse);
  });

  test('createDcService should call axios.post with correct body', async () => {
    const req = { body: { name: 'new dc' } };
    const fakeResponse = { data: { success: true } };
    mockPost.mockResolvedValue(fakeResponse);

    const result = await createDcService(req);

    expect(mockPost).toHaveBeenCalledWith('/create-dc', req.body);
    expect(result).toBe(fakeResponse);
  });

  test('getAllDcService should call axios.get with body', async () => {
    const req = { body: { filter: 'all' } };
    const fakeResponse = { data: { success: true } };
    mockGet.mockResolvedValue(fakeResponse);

    const result = await getAllDcService(req);

    expect(mockGet).toHaveBeenCalledWith('/get-all-dc', req.body);
    expect(result).toBe(fakeResponse);
  });

  test('updateDcService should call axios.put with body', async () => {
    const req = { body: { id: 1, name: 'updated dc' } };
    const fakeResponse = { data: { success: true } };
    mockPut.mockResolvedValue(fakeResponse);

    const result = await updateDcService(req);

    expect(mockPut).toHaveBeenCalledWith('/update-dc', req.body);
    expect(result).toBe(fakeResponse);
  });

  test('deleteDcService should call axios.delete with body', async () => {
    const req = { body: { id: 1 } };
    const fakeResponse = { data: { success: true } };
    mockDelete.mockResolvedValue(fakeResponse);

    const result = await deleteDcService(req);

    expect(mockDelete).toHaveBeenCalledWith('/delete-dc', { data: req.body });
    expect(result).toBe(fakeResponse);
  });
});