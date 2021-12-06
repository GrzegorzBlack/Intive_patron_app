import './App.css';

import MainContent from "./components/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page from "./components/Page";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/page/:title" element={<Page />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
