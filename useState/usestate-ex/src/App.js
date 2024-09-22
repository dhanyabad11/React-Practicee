import logo from './logo.svg';
import './App.css';
import ToggleSwitch from './components/ToggleSwitch';
import FormInput from './components/FormInput';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
   <ToggleSwitch></ToggleSwitch>
   <FormInput></FormInput>
   <UserProfile></UserProfile>
   <TodoList></TodoList>
    </div>
  );
}

export default App;
