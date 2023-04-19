import './App.css';
import Pagination from './components/Pagination/Pagination';
import SumTask from './components/SumTask/SumTask';
import Form from './components/Form/Form';
import Timer from './components/Timer/Timer';
import MouseCordinates from './components/MouseCordinates/MouseCordinates';
import LightDarkTheme from './components/LightDarkTheme/LightDarkTheme';

function App() {
  return (
    <div>
      <SumTask />
      <Pagination />
      <Form />
      <Timer />
      <MouseCordinates />
      <LightDarkTheme />
    </div>
  );
}

export default App;
