import { Routes, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;