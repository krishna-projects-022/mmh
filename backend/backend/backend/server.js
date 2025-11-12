const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sellerRoutes = require("./routes/sellerRoutes");
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

// Middleware
app.use(
  cors({
    origin: '*',                     // Allow every domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',              // Important for JWT
    ],
    credentials: false,             // Set true only if you need cookies
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect Database
const db = require('./config/db');

(async () => {
  try {
    const res = await db.query(`
      SELECT column_name, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'seller_profiles' 
        AND column_name = 'store_name'
    `);
    // console.log('Backend sees store_name as:', res.rows[0]);
  } catch (err) {
    console.error('DB check failed:', err);
  }
})();

app.use("/api/sellers", sellerRoutes);
app.use('/api/categories', categoryRoutes);

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Sample user routes (you can replace with your actual routes)
app.use('/api/users', require('./routes/userRoutes'));

// 404 handler - FIXED: Use proper route pattern
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found: ' + req.originalUrl
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
});

// Test connection
(async () => {
  try {
    const client = await require('./config/db').connect();
    console.log('PostgreSQL Connected!');
    client.release();
  } catch (err) {
    console.error('DB Connection Failed:', err);
  }
})();