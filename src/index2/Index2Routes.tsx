import { Routes, Route } from 'react-router-dom';
import Index2Home from './pages/Index2Home';
import '../index2/index.css'; // Import global styles for index2

const Index2Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index2Home />} />
      {/* Since source is single-page, only one route needed */}
    </Routes>
  );
};

export default Index2Routes;
