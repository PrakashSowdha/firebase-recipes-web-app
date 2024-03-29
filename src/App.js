import { useState } from 'react';
import FirebaseAuthService from './FirebaseAuthService';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className='App'>
      <div className='title-row'>
        <div className='title'>Firebase Recipes</div>
        <LoginForm existingUser={user}></LoginForm>
      </div>
    </div>
  );
}

export default App;
