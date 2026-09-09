import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import AdminClubManagement from './pages/AdminClubManagement';
import './App.css'; // Optional if you have global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/club-management" replace />} />
        <Route element={<AdminLayout />}>
          <Route path="/club-management" element={<AdminClubManagement />} />
          {/* Add more admin routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
