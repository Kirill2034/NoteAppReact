import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FarebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <NavBar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path={'/'} exact element={<Home />} />
              <Route path={'/about'} element={<About />} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
