const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
// User Registration
router.post('/register', async (req, res) => {
const { name, email, password } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);
try {
   const user = await User.create({ name, email, password: hashedPassword });
   res.status(201).json(user);
 } catch (error) {
   res.status(500).json({ message: error.message });
 }
});
// User Login
router.post('/login', async (req, res) => {
const { email, password } = req.body;
 const user = await User.findOne({ email });
if (user && await bcrypt.compare(password, user.password)) {
   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
   res.json({ token, user });
 } else {
   res.status(401).json({ message: 'Invalid credentials' });
 }
});
module.exports = router;