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
    GET_ROOM : '/get-room',
    CREATE_ROOMS : '/create-room',
    UPDATE_ROOM : '/update-room',
    DELETE_ROOM : '/delete-room',
  },
}));

const { getDcService, createDcService, getAllDcService, updateDcService, deleteDcService } = await import(
  '#src/services/backend.service.js'
);

const {getRoomService,createRoomsService,updateRoomService,deleteRoomService,} = await import(
  '#src/services/backend.service.js'
);

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
  test('getRoomService should call axios.get with correct params', async () => {
    const req = { query: { roomId: 1 } };
    const fakeResponse = { data: { success: true, room: { id: 1, name: 'Room 1' } } };
    mockGet.mockResolvedValue(fakeResponse);

    const result = await getRoomService(req);

    expect(mockGet).toHaveBeenCalledWith('/get-room', { params: req.query });
    expect(result).toBe(fakeResponse);
  });

  test('createRoomsService should call axios.post with correct body', async () => {
    const req = { body: { name: 'New Room' } };
    const fakeResponse = { data: { success: true, room: { id: 2, name: 'New Room' } } };
    mockPost.mockResolvedValue(fakeResponse);

    const result = await createRoomsService(req);

    expect(mockPost).toHaveBeenCalledWith('/create-room', req.body);
    expect(result).toBe(fakeResponse);
  });

  test('updateRoomService should call axios.put with correct body', async () => {
    const req = { body: { roomId: 1, name: 'Updated Room' } };
    const fakeResponse = { data: { success: true, room: { id: 1, name: 'Updated Room' } } };
    mockPut.mockResolvedValue(fakeResponse);

    const result = await updateRoomService(req);

    expect(mockPut).toHaveBeenCalledWith('/update-room', req.body);
    expect(result).toBe(fakeResponse);
  });

  test('deleteRoomService should call axios.delete with correct body', async () => {
    const req = { body: { roomId: 1 } };
    const fakeResponse = { data: { success: true } };
    mockDelete.mockResolvedValue(fakeResponse);

    const result = await deleteRoomService(req);

    expect(mockDelete).toHaveBeenCalledWith('/delete-room', { data: req.body });
    expect(result).toBe(fakeResponse);
  });

  // Edge cases and error handling tests

  test('getRoomService should handle axios get failure', async () => {
    const req = { query: { roomId: 1 } };
    const error = new Error('Failed to fetch room');
    mockGet.mockRejectedValue(error);

    try {
      await getRoomService(req);
    } catch (e) {
      expect(e).toBe(error);
    }
  });

  test('createRoomsService should handle axios post failure', async () => {
    const req = { body: { name: 'New Room' } };
    const error = new Error('Failed to create room');
    mockPost.mockRejectedValue(error);

    try {
      await createRoomsService(req);
    } catch (e) {
      expect(e).toBe(error);
    }
  });

  test('updateRoomService should handle axios put failure', async () => {
    const req = { body: { roomId: 1, name: 'Updated Room' } };
    const error = new Error('Failed to update room');
    mockPut.mockRejectedValue(error);

    try {
      await updateRoomService(req);
    } catch (e) {
      expect(e).toBe(error);
    }
  });

  test('deleteRoomService should handle axios delete failure', async () => {
    const req = { body: { roomId: 1 } };
    const error = new Error('Failed to delete room');
    mockDelete.mockRejectedValue(error);

    try {
      await deleteRoomService(req);
    } catch (e) {
      expect(e).toBe(error);
    }
  });
});
