const express = require('express');
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/product.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend/dist/frontend/browser')));

// Fallback to index.html for Angular routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
