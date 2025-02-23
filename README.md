# 📝 Simple Blog System (Express.js + EJS)

A **minimalist blog application** built using **Express.js and EJS** where users can **view, add, and read blog posts** stored in a JSON file.

## 🚀 Features
- 📰 View all blog posts (`GET /posts`)
- 📄 View a single post (`GET /post?id=1`)
- ✍️ Add a new blog post (`POST /add-post`)
- 📂 Posts stored in `posts.json`
- 📡 Middleware for logging requests
- 🎨 Modern UI with responsive design (based on Figma reference)
- ⚡ Uses `fs` module to read/write posts

---

## 📁 Folder Structure
blog-app/ │── views/ # EJS Templates │ ├── home.ejs # List of all blog posts │ ├── post.ejs # View a single post │ ├── addPost.ejs # Form to add new post │── public/ # Static files (CSS, JS, images) │ ├── style.css # Modern blog styles │── posts.json # Blog posts stored here │── app.js # Main server file │── package.json # Node.js dependencies │── README.md # Project documentation

---

## 🛠️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
2️⃣ Install Dependencies
npm install
3️⃣ Start the Server
node app.js
The server will run on http://localhost:3000.

🖥️ Usage
🌍 Viewing All Posts
Visit http://localhost:3000/posts to see all posts.
📄 Viewing a Single Post
Click on a post title or go to http://localhost:3000/post?id=1 to view a specific post.
✍️ Adding a New Post
Navigate to http://localhost:3000/add-post to add a new post.
🎨 UI Design Reference
This project follows a modern blog UI based on this Figma design:
🔗 Figma Design Link

🤝 Contributing
Fork the repository
Create a new branch: git checkout -b feature-name
Make changes & commit: git commit -m "Added a feature"
Push to GitHub: git push origin feature-name
Submit a Pull Request
⚡ Technologies Used
Node.js & Express.js - Backend framework
EJS - Templating engine
CSS (Flexbox & Grid) - Modern UI styling
fs module - File system operations
Git & GitHub - Version control


