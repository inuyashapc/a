import logo from './logo.svg';
import './App.css';
import Header from './componants/Header';
import Content from './componants/Content';
import About from './componants/About';
import { Route, Routes } from 'react-router-dom';
function App() {//element no can nhan la 1 react element
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Content />
    </div>
  );
}

export default App;
