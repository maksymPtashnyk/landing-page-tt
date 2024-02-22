import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home';

function App() {
  return (
    <BrowserRouter basename="/landing-page-tt">
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

