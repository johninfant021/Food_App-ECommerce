const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // ✅ Check for token in header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Token required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // ✅ Verify token using secret key
    const decoded = jwt.verify(token, "mysecret");

    // ✅ Attach user info to request
    req.user = decoded;

    next(); // allow request to proceed
  } catch (err) {
    // ✅ Handle expired or invalid tokens
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = authMiddleware;
