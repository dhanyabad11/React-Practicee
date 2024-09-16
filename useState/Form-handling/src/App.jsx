import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const handleSubmit = (event) => {
       event.preventDefault();
        console.log('Username: ${username}, Password: ${password}');

   };

  return (
<form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default App
