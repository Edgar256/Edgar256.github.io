import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Landing from './pages/Landing';
import Project from './pages/Project';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}
