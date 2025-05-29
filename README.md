# Netflix Clone

A modern Netflix clone built with React, TypeScript, and Tailwind CSS. This project replicates the core features and UI of Netflix, providing a seamless streaming platform experience.

## Features

- 🎬 Browse movies and TV shows
- 🔍 Search functionality
- 🎯 Movie details with backdrops and posters
- 👥 Cast information
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast and optimized performance

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Redux Toolkit (RTK Query)
- TMDB API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your TMDB API key:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable components
├── features/       # Feature-based modules
│   ├── movies/    # Movie-related features
│   └── actors/    # Actor-related features
├── api/           # API integration
└── types/         # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie data API
- Netflix for the design inspiration
