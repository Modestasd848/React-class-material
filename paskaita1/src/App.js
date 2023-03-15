import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import styles from './App.css';

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
