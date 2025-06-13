# Campus Club Finder

Campus Club Finder is a web application that helps students discover, explore, and join clubs at their campus. Browse club profiles, view upcoming events, and get involved in your campus community!

---

## 🚀 Features

- **Browse Clubs:** View all available clubs with descriptions and images.
- **Club Details:** See detailed info and upcoming events for each club.
- **Join Clubs:** Mark clubs as joined (saved in your browser).
- **Sort & View:** Sort clubs A-Z or Z-A, and toggle between grid or list view.
- **Responsive Design:** Looks great on desktop and mobile.
- **404 Handling:** Friendly not-found page for invalid routes.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

## 📦 Getting Started

### 1. **Clone the repository**

```bash
git clone <https://github.com/sebastianbintang/Assignment-5.git>
cd campus-club-finder/Assignment-5
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 🖼️ Adding Images

- Place images in the `public/images/` folder.
- Reference them in club data as `/images/your-image.jpg`.

---

## 📁 Project Structure

```
Assignment-5/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── index.html
├── package.json
└── tailwind.config.js
```

---

## ✨ Customization

- **Add Clubs:** Edit `src/data/clubs.js` to add or update clubs.
- **Add Images:** Place new images in `public/images/` and update the `image` path in club data.
- **Add Icons:** Use [Heroicons](https://heroicons.com/) SVGs directly in your components.

---

## 📄 License

This project is for educational purposes.

---

## 🙋‍♂️ Questions?

Open an issue or reach out to the maintainer.