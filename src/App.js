import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/landing-page-tt" exact element={<Home />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

