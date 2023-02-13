import './App.css';
import FreeCodeCampLogo from './components/FreeCodeCampLogo'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='app-todo'>
      <FreeCodeCampLogo />
      <div className='main-todo'>
        <h1>ToDo List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
