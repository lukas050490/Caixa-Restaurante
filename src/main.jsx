import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Container/Home/index.jsx';
import {AppProvider} from './context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Home />
    </AppProvider>
  </StrictMode>,
)
