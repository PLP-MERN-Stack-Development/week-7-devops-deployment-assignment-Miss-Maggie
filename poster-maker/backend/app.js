const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const posterRoutes = require('./routes/posterRoutes');
const apiRoutes = require('./routes');
const authRoutes = require('./routes/auth');
const User = require('./models/User'); // 👈 Add this line

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
// app.use('/api', apiRoutes);
app.use('/api/posters', posterRoutes);
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

// app.post('/api/auth/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // ✅ Trim and check for missing fields
//     if (!name?.trim() || !email?.trim() || !password?.trim()) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const user = new User({ name, email, password });
//     await user.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Register error:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });


app.post('/api/auth/login', (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    res.status(201).json({ message: 'User logged In successfully' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
