import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const handleLogin = (userData: { username: string; id: string }) => {
    if (userData && userData.username && userData.id) {
      setUsername(userData.username);
      setUserId(userData.id);
    } else {
      console.error('Invalid login data:', userData);
    }
  };

  if (!username || !userId) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <Dashboard userId={userId} />
    </div>
  );
};

export default App;