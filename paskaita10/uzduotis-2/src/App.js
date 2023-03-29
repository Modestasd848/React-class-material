import './App.css';
import Header from './components/Header/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import About from './components/About/About.jsx';
import News from './components/News/News';
import Services from './components/Services/Services';
import PreviousWork from './components/PreviousWork/PreviousWork';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/previous-work" element={<PreviousWork />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
