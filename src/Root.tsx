import React from 'react';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </Router>
);
