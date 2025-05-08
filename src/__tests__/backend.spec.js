import { jest } from '@jest/globals';
const createDcService = jest.fn();
const getDcService = jest.fn();
const getAllDcService = jest.fn();
const updateDcService = jest.fn();
const deleteDcService = jest.fn();

await jest.unstable_mockModule('#src/services/backend.service.js', () => ({
  createDcService,
  getDcService,
  getAllDcService,
  updateDcService,
  deleteDcService,
}));

const { createDc, getDc, getAllDc, updateDc, deleteDc } = await import('#src/controllers/backend.controller.js');

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
