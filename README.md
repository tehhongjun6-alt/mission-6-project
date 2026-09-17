markdown
# DeviceNest

A device status dashboard built with React — log in to view the online/offline status of your Apple devices. Built as part of the Sigma School front-end development course.

<img width="1802" height="936" alt="scc" src="https://github.com/user-attachments/assets/06ee684c-c025-41f0-9f98-4cdc6ae4dee2" />


 Features

- log in with demo credentials, protected by a route guard
-  visiting `/dashboard` without logging in redirects you to `/login`
-  each device shows its image, location, last seen time and status badge
- filter devices by All / Online / Offline
- login state is saved in the browser, so a page refresh keeps you logged in
-  polished dark gradient UI that adapts to mobile and desktop

Tech Stack

- **React 19** — components, props, state, Context
- **Vite** — build tool and dev server
- **React Router 7** — pages and route protection
- **Bootstrap 5 + react-bootstrap** — layout and UI components
- **usehooks-ts** — `useLocalStorage` for persistent login state
