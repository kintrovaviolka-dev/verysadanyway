import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Analytics} from '@vercel/analytics/react';
import App from './App.tsx';
import './index.css';
import { ProgressProvider } from './context/ProgressContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressProvider>
      <App />
      <Analytics />
    </ProgressProvider>
  </StrictMode>,
);
