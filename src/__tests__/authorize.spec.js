import { jest } from '@jest/globals';

import { authenticateToken } from '#src/middleware/authenticate.js';
import { authorize } from '#src/middleware/authorize.js';
const mockVerify = jest.fn();

await jest.unstable_mockModule('jsonwebtoken', () => ({
  default: {
    verify: mockVerify,
  },
}));

const mockReq = (headers = {}) => ({
  headers,
});
const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
const next = jest.fn();

describe('authenticateToken', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should respond 401 if no token', () => {
    const req = mockReq();
    const res = mockRes();

    authenticateToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'No token provided' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should respond 403 if token is invalid', () => {
    const req = mockReq({ authorization: 'Bearer fakeToken' });
    const res = mockRes();

    mockVerify.mockImplementation((token, secret, cb) => cb(new Error('Invalid'), null));

    authenticateToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should call next if token is valid', () => {
    const req = mockReq({ authorization: 'Bearer validToken' });
    const res = mockRes();
    const decoded = { id: 1, role: 'admin' };

    mockVerify.mockImplementation((token, secret, cb) => cb(null, decoded));

    authenticateToken(req, res, (done) => {
      expect(req.user).toEqual(decoded);
      done();
    });
  });
});

describe('authorize', () => {
  const allowedRoles = ['admin', 'user'];

  test('should call next if user role is allowed', () => {
    const req = { user: { role: 'admin' } };
    const res = mockRes();
    const middleware = authorize(allowedRoles);

    middleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test('should respond 403 if user role is not allowed', () => {
    const req = { user: { role: 'guest' } };
    const res = mockRes();
    const middleware = authorize(allowedRoles);

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Forbidden' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should respond 403 if no user', () => {
    const req = {};
    const res = mockRes();
    const middleware = authorize(allowedRoles);

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Forbidden' });
    expect(next).not.toHaveBeenCalled();
  });
});
