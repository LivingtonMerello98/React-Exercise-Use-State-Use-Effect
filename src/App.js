import './App.css';
import TestComponent from './components/TestComponent';
import AjaxComponent from './components/AjaxComponent';
import UserComponent from './components/UserComponent';
import AjaxAsyncAwaitComponent from './components/AjaxAsyncAwaitComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AjaxComponent /> */}
        {/* <UserComponent /> */}
        <AjaxAsyncAwaitComponent />
      </header>
    </div>
  );
}

export default App;
