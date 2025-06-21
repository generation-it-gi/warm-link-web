import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { SearchResultPage } from './features/search/SearchResultPage';
import { LayoutWithNav } from './layouts/WithNav';
import { LayoutWithoutNav } from './layouts/WithoutNav';
import { ChatPage } from './pages/ChatPage';
import { HomePage } from './pages/HomePage';
import { MyPage } from './pages/MyPage';
import { RegisterPage } from './pages/RegisterPage';
import { SearchPage } from './pages/SearchPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Nav가 있는 페이지들 */}
        <Route element={<LayoutWithNav />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/result" element={<SearchResultPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/my" element={<MyPage />} />
        </Route>

        {/* Nav가 없는 페이지들 */}
        <Route element={<LayoutWithoutNav />}>
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
