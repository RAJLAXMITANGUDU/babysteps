const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); 

const authRoutes = require('./routes/authRoutes');
const milestoneRoutes = require('./routes/milestoneRoutes');
const tipRoutes = require('./routes/tipRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/milestones', milestoneRoutes);
app.use('/api/milestones/:id/tips', tipRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
