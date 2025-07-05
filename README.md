# Angular Todo List

A modern, full-stack todo list application built with Angular 20 and Node.js. This project features a clean, responsive UI with Bootstrap and a robust backend API with MongoDB integration.

## Features

-  **Create, Read, Update, Delete** todos
- **Category Management** (Work, Personal, Study, Today, This Week)
- **Toggle completion status** 
- **Responsive design** with Bootstrap 5
- **Real-time updates**
- **MongoDB persistence**
- **Modern UI/UX** with clean styling
- **Angular Router** for navigation

## Tech Stack

### Frontend
- **Angular 20** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **Bootstrap 5** - Responsive CSS framework
- **Angular Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or cloud instance)
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/angular-todo-list.git
   cd angular-todo-list
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:3000
   ```

6. **Start the Angular development server**
   ```bash
   ng serve
   # Application runs on http://localhost:4200
   ```

## Project Structure

```
angular-todo-list/
├── src/
│   ├── app/
│   │   ├── MyComponent/
│   │   │   ├── about/          # About page component
│   │   │   ├── add-todo/       # Add todo component
│   │   │   ├── to-dos/         # Todo list component
│   │   │   └── todo-item/      # Individual todo item
│   │   ├── services/
│   │   │   └── todo.service.ts # Todo service for API calls
│   │   └── ...
│   └── ...
├── backend/
│   ├── server.js              # Express server
│   ├── package.json           # Backend dependencies
│   └── ...
└── ...
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |
| PATCH | `/api/todos/:id/toggle` | Toggle todo completion |

## 📱 Screenshots

*Add screenshots of your application here*

## 🧪 Development

### Running Tests
```bash
# Run unit tests
ng test

# Run backend tests (if implemented)
cd backend && npm test
```

### Building for Production
```bash
# Build frontend
ng build

# The build artifacts will be stored in the `dist/` directory
```

## 🌐 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todolist
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Angular CLI](https://github.com/angular/angular-cli)
- UI components from [Bootstrap](https://getbootstrap.com/)
- Icons from [Bootstrap Icons](https://icons.getbootstrap.com/)

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/angular-todo-list](https://github.com/yourusername/angular-todo-list)
