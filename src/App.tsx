import { useState } from 'react';

import UserContext from './Components/UserContext';
import MainPage from './pages/MainPage';

function App() {
  const [value, SetValue] = useState<any>([]);
  return (
    <UserContext.Provider value={{ value, SetValue }}>
      <MainPage />
    </UserContext.Provider>
  );
}

export default App;
