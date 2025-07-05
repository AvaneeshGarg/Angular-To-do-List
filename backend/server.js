const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/try';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB successfully');
  console.log('Database:', mongoUri);
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});

// Add connection event listeners
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('Mongoose connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Todo Schema
const todoSchema = new mongoose.Schema({
  sno: { type: Number, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  active: { type: Boolean, default: true },
  category: { 
    type: String, 
    enum: ['Work', 'Personal', 'Study', 'Today', 'This Week'],
    default: 'Personal'
  }
}, { 
  timestamps: true,
  collection: 'todos'  // Specify custom collection name
});

const Todo = mongoose.model('Todo', todoSchema);


// Get all todos
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new todo
app.post('/api/todos', async (req, res) => {
  try {
    const { title, desc, category } = req.body;
    
    // Get the highest sno and increment by 1
    const lastTodo = await Todo.findOne().sort({ sno: -1 });
    const newSno = lastTodo ? lastTodo.sno + 1 : 1;
    
    const todo = new Todo({
      sno: newSno,
      title,
      desc,
      category: category || 'Personal',
      active: true
    });
    
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a todo
app.put('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const todo = await Todo.findByIdAndUpdate(id, updates, { new: true });
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a todo
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Toggle todo active status
app.patch('/api/todos/:id/toggle', async (req, res) => {
  try {
    const { id } = req.params;
    
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    todo.active = !todo.active;
    const updatedTodo = await todo.save();
    
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
