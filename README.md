# Marvel Universe (React SPA)

A React single-page application for exploring Marvel characters, comics, series, and events using the official **Marvel Comics API**.

> ⚠️ Status: Archived / Educational Demo

This project was originally created in **2023** as a learning project demonstrating:

- React
- Client-side routing
- API integration
- Dynamic data-driven UI

As of **2025**, the public Marvel Developer API is no longer active or consistently available.  
The application UI still runs correctly, but **all external API requests return errors**, so no real Marvel data is loaded.

The repository is preserved as an educational example of how to build a React app that integrates with a third-party REST API.

## What This Project Demonstrates

Even though the live data source is no longer available, the project still shows how to implement:

- Multi-page SPA navigation with **React Router v6**
- Reusable, composable React components
- Search with prefix filtering logic
- Loading and error states
- Responsive card-based layouts
- Separation of concerns (pages, UI components, constants, API layer)

When the API was working, users could:

- Browse random Marvel items
- Search for characters, comics, series, and events
- Open detailed pages with related content links

## Features (UI & Architecture)

- Category selection: **Characters / Comics / Events / Series**
- Search input with live query handling
- Dedicated detail page layout for each item type
- Components for related entities (characters, comics, stories, creators, etc.)
- Centralized API configuration
- Styled UI using Material UI and styled-components

## Screenshots

> These illustrate how the app looked when the Marvel API was operational.

### Welcome / Category Selection

<img width="1317" height="749" alt="image" src="https://github.com/user-attachments/assets/5e6faabe-c7ee-406b-8846-255950b08069" />

### Main Page with Dashboard & Search

<img width="1162" height="839" alt="image" src="https://github.com/user-attachments/assets/ca9697b0-e2a3-4dfa-9571-7014978a7a70" />

### Item Detail Page

<img width="1192" height="671" alt="image" src="https://github.com/user-attachments/assets/8c0165e6-1e73-480f-bf0f-bc7dd3c652f9" />


## Project Structure (simplified)

src/
├── components/
│ ├── pages/
│ │ ├── EnterPage.jsx # category selection
│ │ ├── MainPage.jsx # search + dashboard
│ │ └── ItemPage.jsx # detailed item view
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Search.jsx
│ ├── Dashboard.jsx
│ ├── Information.jsx # main item renderer
│ ├── Container.jsx # related items renderer
│ └── ...
├── constants/
│ ├── routes.js
│ └── api.js # Marvel API config & auth
└── App.jsx

## Tech Stack

- React 18
- React Router v6
- Material UI
- styled-components
- Fetch API / Axios
- MD5 hashing (for Marvel API auth)

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/stepan-mateiko/marvel-universe.git
cd marvel-universe
npm install
npm start
```

The app will run at:
http://localhost:3000

Note: The UI will load, but no external data will appear because the Marvel API is inactive.

## Marvel API Configuration (Historical)

The app was designed to use the Marvel Developer API with the following auth scheme:
ts + privateKey + publicKey → MD5 hash

Keys were configured in:
src/constants/api.js

Because the API is no longer functional, these keys are now effectively unused.

## Deployment

Originally deployed via GitHub Pages:
https://marvel-universe-three.vercel.app/

The deployed version shows the interface but cannot display live Marvel data.

## Known Limitations

- Marvel API endpoints return errors (API likely sunset)
- No offline dataset or mock data by default
- No server-side proxy or caching layer
- API keys are stored client-side (acceptable only for demos)

## Possible Improvements (If You Fork This Project)

To make the app functional again without the Marvel API, you could:

- Replace API calls with a local JSON dataset (mock Marvel-like data)
- Add a mock server (e.g. using json-server or MSW)
- Implement your own backend proxy with cached/static data
- Adapt the UI to work with another public comics or media API

## License & Credits

This project is for educational and demonstration purposes only.

Marvel characters and related content are © Marvel. All rights reserved.

This repository does not include Marvel data, only the application code that once consumed the public API.
