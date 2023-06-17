import React from 'react'
import './styles/global.scss'
import App from './App'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as Element);
root.render(<App />);