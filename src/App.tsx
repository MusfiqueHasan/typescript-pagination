import { CircularProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DataProvider from './components/pages/DataProvider';
import NotFound from './components/pages/NotFound';

const Home = lazy(() => import('./components/pages/Home'));
const Details = lazy(() => import('./components/pages/Details'));

const App: React.FC = () => {
  return (
    <div className="App" data-testid="app">
      <Suspense fallback={<CircularProgress />}>
        <BrowserRouter>
          <DataProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DataProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
