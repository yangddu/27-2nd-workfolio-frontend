import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';
// import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
