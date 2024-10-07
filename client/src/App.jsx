import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import LearningCentre from './pages/LearningCentre';
import HSKOne from './pages/HSK/hsk1';
import HSKTwo from './pages/HSK/hsk2';
import HSKThree from './pages/HSK/hsk3';
import HSKFour from './pages/HSK/hsk4';
import HSKFive from './pages/HSK/hsk5';
import HSKSix from './pages/HSK/hsk6';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/learningcentre" element={<LearningCentre />} />
        <Route path="/hsk1" element={<HSKOne />} />
        <Route path="/hsk2" element={<HSKTwo />} />
        <Route path="/hsk3" element={<HSKThree />} />
        <Route path="/hsk4" element={<HSKFour />} />
        <Route path="/hsk5" element={<HSKFive />} />
        <Route path="/hsk6" element={<HSKSix />} />
      </Routes>
    </BrowserRouter>
  );
}
