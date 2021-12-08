import './App.css';

import MainContent from "./components/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page from "./components/Page";
import Providers from "./components/Providers";

function App() {
  return (
      <Providers>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/page/:title" element={<Page />} />
            </Routes>
        </BrowserRouter>
      </Providers>
  );
}

export default App;
