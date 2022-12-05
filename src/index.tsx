import React from 'react';
import ReactDOM from 'react-dom/client';
import {Game} from './components/Game/Game';
import './index.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Game />);
}
