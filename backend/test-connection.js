const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/try';

console.log('Testing MongoDB connection...');
console.log('Connection string:', mongoUri);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connection successful!');
  console.log('Database name:', mongoose.connection.db.databaseName);
  
  // Test creating a document
  const testSchema = new mongoose.Schema({ test: String });
  const TestModel = mongoose.model('Test', testSchema);
  
  return TestModel.create({ test: 'Hello MongoDB!' });
})
.then((doc) => {
  console.log('✅ Test document created:', doc);
  console.log('✅ MongoDB is working correctly!');
  process.exit(0);
})
.catch((error) => {
  console.error('❌ MongoDB connection failed:', error.message);
  process.exit(1);
});
