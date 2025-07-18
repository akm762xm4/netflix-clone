# 🎬 Moviescope

A modern, high-performance Netflix-inspired streaming platform built with React, TypeScript, and Tailwind CSS. Moviescope lets you browse, search, and discover movies and TV shows with a beautiful, responsive UI powered by the TMDB API.

---

## 🚀 Features

- **Browse Movies & TV Shows:** Explore trending, popular, and top-rated titles.
- **Advanced Search:** Instantly find movies, series, or actors.
- **Detailed Info:** View movie/series details, cast, and related content.
- **Cast & Actor Pages:** Dive into actor profiles and filmographies.
- **Responsive Design:** Seamless experience on desktop, tablet, and mobile.
- **Modern UI:** Clean, intuitive interface with Tailwind CSS.
- **Optimized Performance:** Fast loading and smooth navigation.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **State Management:** Redux Toolkit (RTK Query)
- **Routing:** React Router
- **API:** TMDB (The Movie Database)

---

## 📦 Project Structure

```
src/
├── app/           # App-wide store and API setup
├── assets/        # Images and static assets
├── components/    # Reusable UI components
├── features/      # Feature modules (movies, series, actors, search)
├── pages/         # Page-level components
├── routes/        # Route definitions and protection
├── utility/       # Utility functions
└── index.css      # Global styles
```

---

## ⚡ Getting Started

### 1. Prerequisites

- Node.js (v14+)
- npm or yarn

### 2. Installation

```bash
git clone https://github.com/yourusername/moviescope.git
cd moviescope
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## 🖼️ Screenshots

<!--
Add screenshots here for visual appeal!
Example:
![Home Page](./src/assets/screenshot-home.png)
-->

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to your branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the movie and TV data API
- Netflix for design inspiration

---
