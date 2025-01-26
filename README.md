# QuestSearch 🎯

A dynamic full-stack application for searching and interacting with English learning questions.

## 🌟 Features

- **Smart Search**: Real-time search functionality with filters
- **Interactive Questions**: Multiple question types supported:
  - Multiple Choice Questions (MCQ)
  - Anagram Puzzles (Word & Sentence)
  - Read Along Exercises
  - Content-based Learning

- **Modern UI/UX**: 
  - Responsive design for all devices
  - Smooth animations and transitions
  - Intuitive user interface
  - Real-time feedback system

## 🛠️ Tech Stack

### Frontend
- React.js
- gRPC-Web
- Lucide Icons
- CSS3 with animations

### Backend
- Node.js
- gRPC
- MongoDB
- Protocol Buffers

### Infrastructure
- Envoy Proxy
- Docker
- MongoDB Atlas

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Docker
- MongoDB Atlas Account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/PriyanshK09/SpeakX-QuestSearch.git
cd questsearch
```

2. **Setup Backend**
```bash
cd backend
npm install
# Create .env file with your MongoDB URI
npm start
```

3. **Setup Frontend**
```bash
cd frontend
npm install
npm start
```

4. **Start Envoy Proxy**
```bash
cd envoy
docker-compose up
```

## 🎮 Usage

1. **Search Questions**: Use the search bar to find specific questions
2. **Apply Filters**: Filter questions by type (MCQ, Anagram, etc.)
3. **Interact with Questions**: 
   - Click "View Details" to attempt questions
   - Get immediate feedback on answers
   - View solutions when needed

## 🔧 API Structure

The application uses gRPC for communication between frontend and backend:

```proto
service QuestionService {
  rpc GetQuestions (GetQuestionsRequest) returns (GetQuestionsResponse) {}
}
```

## 📱 Screenshots

[Add your application screenshots here]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the 

LICENSE

 file for details.

## 👏 Acknowledgments

- The gRPC team for excellent documentation
- MongoDB Atlas for database hosting