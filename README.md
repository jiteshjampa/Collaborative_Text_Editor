# ✏️ Collaborative Text Editor - Frontend  

🚀 **Real-time collaborative text editing built with React, Socket.io, and Tailwind CSS.**  


🔗 **Live Demo:** [Click here](https://vermillion-cranachan-eca65b.netlify.app/)  
🔗 **Backend Repo:** [Backend Repository](https://github.com/jiteshjampa/Collaborative_Text_Editor_Backend)  

---

## 🎯 Features  

✅ **Real-time collaboration** with multiple users  
✅ **WebSockets (Socket.io)** for instant updates  
✅ **Text editing** with formatting options  
✅ **User presence tracking** (Active users list)  
✅ **Shareable links** for easy collaboration  
✅ **UI** with Tailwind CSS  

---

## 🛠 Tech Stack  

- **Frontend:** React.js, Tailwind CSS  
- **Real-time:** Socket.io (WebSockets)  
- **State Management:** useState, useEffect  
- **Routing:** React Router  

---

## ⚡ Installation & Setup  

**1️⃣ Clone the repository**  
```sh
git clone https://github.com/your-username/collaborative-text-editor-frontend.git
cd collaborative-text-editor-frontend
```

**2️⃣ Install dependencies**  
```sh
npm install
```

**3️⃣ Create a `.env` file and configure the backend URL**  
```env
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

**4️⃣ Start the development server**  
```sh
npm run dev
```

🚀 Now open **http://localhost:5173** in your browser!

---

## 🔗 API Integration  

The frontend interacts with the backend via REST API and WebSockets.  

📌 **Backend API Documentation:** [View Here](https://imf-gadget.postman.co/workspace/New-Team-Workspace~0cb77262-e5b7-4952-bd34-e3b77ad05fbd/collection/36484787-45c39f3c-5f25-41c3-8876-814f818b591e?action=share&creator=36484787)  

📌 **Example API Calls:**  

- **Fetch Document:** `GET /api/docs/:id`  
- **Update Document:** `PATCH /api/docs/:id`  
- **Real-time Editing:** `Socket.io Events`  

---

## 🎨 UI Preview  

| **Home** | **Editor Page** |
|--------------|-------------------|
| ![Home Screenshot](https://snipboard.io/zmGTg1.jpg) | ![Editor Screenshot](https://snipboard.io/OcuxNh.jpg) |

---

## 🚀 Deployment  

### ✅ Supported Hosting Platforms  
- **[Vercel](https://vercel.com/)**
- **[Netlify](https://www.netlify.com/)**
- **[Render](https://render.com/)**  

**Deploy on Vercel:**  
```sh
vercel deploy
```

**Deploy on Netlify:**  
```sh
netlify deploy
```

---

## 🤝 Contributing  

Want to contribute? Follow these steps:  
1. **Fork the repository**  
2. **Create a new branch:** `git checkout -b feature-branch`  
3. **Commit your changes:** `git commit -m "Added new feature"`  
4. **Push to GitHub:** `git push origin feature-branch`  
5. **Create a Pull Request**  

---

## 🛠 Troubleshooting  

🔹 **Socket.io not connecting?**  
- Ensure the backend is running on the correct URL (`REACT_APP_BACKEND_URL`).  
- Check the CORS configuration on the backend.  

🔹 **React Router not working on deployment?**  
- Create a `_redirects` file in `/public` for Netlify:  
  ```
  /* /index.html 200
  ```

---
