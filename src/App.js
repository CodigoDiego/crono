import './App.css';
import TasksList from './components/TasksList';
import cronoLogo from './images/CronoLogo.png'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src={cronoLogo} alt='crono-logo' className='logo'/>
      </div>
      <div className='task-component-container'>
      <TasksList/>
      </div>
    </div>
  );
}

export default App;
