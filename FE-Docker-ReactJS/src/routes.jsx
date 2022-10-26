import Dashboard from './pages/dashboard';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
