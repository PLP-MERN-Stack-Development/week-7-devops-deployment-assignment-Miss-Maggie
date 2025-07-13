const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();

const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/poster-flier';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Only connect to DB and listen if not in test mode
// if (process.env.NODE_ENV !== 'test') {
//   connectDB(mongoURI).then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   });
// }