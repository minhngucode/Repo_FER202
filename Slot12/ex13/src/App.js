import logo from './logo.svg';
import './App.css';
import UserPosts from './Components/UserPosts';
import CountdownTimer from './Components/CountdownTimer';
import WindowSize from './Components/WindowSize';
import ValidatedInput from './Components/ValidatedInput';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <div>
        <UserPosts userId={userId} />
      </div>

      <div>
        <CountdownTimer initialValue={10} />
      </div>

      <WindowSize />

      <div>
      <ValidatedInput validationFunction={(val) => val.length >= 5} placeholder="enter at least 5 characters" successMessage="Valid!" />
      </div>
    </div>
  );
}

export default App;
