import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <Root />,
  );
