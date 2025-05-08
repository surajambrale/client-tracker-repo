const express = require('express');
const router = express.Router();
const Admin = require('./adminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// POST /admin/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ adminId: admin._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
