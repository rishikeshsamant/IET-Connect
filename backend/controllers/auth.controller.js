import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Student from '../models/student.model.js';
import { sendEmail } from '../utils/mailer.js';

export const signup = async (req, res) => {
  try {
    const { name, rollno, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match' });

    const existing = await Student.findOne({
      $or: [{ email: email.toLowerCase() }, { rollno: rollno.toUpperCase() }],
    });

    if (existing) return res.status(400).json({ message: 'Student already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const student = await Student.create({
      name,
      rollno,
      email: email.toLowerCase(),
      password: hashed,
    });

    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ message: 'Error signing up', error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email: email.toLowerCase().trim() });
    if (!student) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      message: 'Login successful',
      token,
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        rollno: student.rollno,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};

export const sendResetCode = async (req, res) => {
  try {
    const { email } = req.body;
    const student = await Student.findOne({ email: email.toLowerCase().trim() });
    if (!student) return res.status(404).json({ message: 'Email not found' });

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    student.resetCode = resetCode;
    student.resetCodeExpiry = Date.now() + 10 * 60 * 1000;
    await student.save();

    await sendEmail(email, 'Password Reset Code', `Your code is: ${resetCode}`);
    res.json({ message: 'Reset code sent' });
  } catch (err) {
    res.status(500).json({ message: 'Reset error', error: err.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, resetCode, newPassword } = req.body;
    const student = await Student.findOne({ email: email.toLowerCase().trim() });

    if (!student || student.resetCode !== resetCode || Date.now() > student.resetCodeExpiry) {
      return res.status(400).json({ message: 'Invalid or expired code' });
    }

    student.password = await bcrypt.hash(newPassword, 10);
    student.resetCode = undefined;
    student.resetCodeExpiry = undefined;
    await student.save();

    res.json({ message: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({ message: 'Reset error', error: err.message });
  }
};
