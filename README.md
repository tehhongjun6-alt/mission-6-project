# DeviceNest

A device status dashboard built with React — log in to view the online/offline status of your Apple devices. Built as part of the Sigma School front-end development course.

![DeviceNest dashboard](./screenshot.png)

## Features

- 🔐 **Login flow** — log in with demo credentials, protected by a route guard
- 🛡️ **Route guard** — visiting `/dashboard` without logging in redirects you to `/login`
- 📱 **Device cards** — each device shows its image, location, last seen time and status badge
- 🟢🔴 **Status filtering** — filter devices by All / Online / Offline
- 💾 **Persistent login** — login state is saved in the browser, so a page refresh keeps you logged in
- ✨ **Responsive design** — polished dark gradient UI that adapts to mobile and desktop

## Tech Stack

- **React 19** — components, props, state, Context
- **Vite** — build tool and dev server
- **React Router 7** — pages and route protection
- **Bootstrap 5 + react-bootstrap** — layout and UI components
- **usehooks-ts** — `useLocalStorage` for persistent login state

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Demo Credentials

| Field    | Value |
|----------|-------|
| Username | `1`   |
| Password | `1`   |

## Project Structure

```
src/
├── AuthContext.js          # Shared login state (Context)
├── components/
│   └── RequireAuth.jsx     # Route guard
├── data/
│   └── device.json         # Device data
└── pages/
    ├── Login.jsx           # Login page
    ├── Dashboard.jsx       # Device dashboard
    └── ErrorPage.jsx       # 404 page
```

## Deployment

Deployed with Vercel: [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app) <!-- TODO: replace with your real Vercel URL after deploying -->
