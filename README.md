# React Todo Application

A modern, responsive Todo application built with React, featuring local storage persistence and a clean user interface.

## 🚀 Features

- ✅ Create, Read, Update, and Delete todos
- 💾 Local storage persistence
- ✨ Toggle todo completion status
- 🎨 Clean and responsive UI
- 🔄 Real-time updates

## 🛠️ Technologies Used

- React 18
- Tailwind CSS
- Context API for state management
- Local Storage API

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sujal862/TaskTrack.git
```

2. Navigate to the project directory:
```bash
cd TaskTrack
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── index.js
├── contexts/
│   ├── TodoContext.js
│   └── index.js
└── App.jsx
```

## 🔧 Core Functionality

### Todo Operations

- **Add Todo**: Create new todos with a unique ID and timestamp
- **Update Todo**: Edit existing todo content
- **Delete Todo**: Remove todos from the list
- **Toggle Status**: Mark todos as complete/incomplete

### Data Persistence
The application uses browser's Local Storage to persist todos, ensuring data survives page refreshes.

## 🎯 Usage

1. Add a new todo using the input field at the top
2. Click on a todo to toggle its completion status
3. Use the edit button to modify existing todos
4. Use the delete button to remove todos

## 💡 Key Components

### TodoForm
Handles the creation of new todos with input validation.

### TodoItem
Displays individual todo items with edit and delete capabilities.

### TodoContext
Manages the application state and provides todo operations to all components.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- Github - [sujal862](https://github.com/sujal862)
- LinkedIn - [Sujal Raj](https://www.linkedin.com/in/sujal-raj/)
