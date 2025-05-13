import jwt from 'jsonwebtoken';
import config from '#src/config.js';
// 用來解token
export function authenticateToken(req, res, next) {
  // const authHeader = req.headers.authorization;
  const token = req.session.jwt; // authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, config.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = decoded;
    next();
  });
}
