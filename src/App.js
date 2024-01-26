
import './App.css';
import MainComponent from './components/MainComponent';
import TodoState from './context/TodoState';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <TodoState>
      <MainComponent/>
    </TodoState>
    </>
  );
}

export default App;
