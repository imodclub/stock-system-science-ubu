import React from 'react';
import { auth } from '../services/firebase';
import Appbar  from './Layout/Appbar';
import ProfileUser from './ProfileUser';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Home({ user }) {
  const userOnHomeUser = user

  return (
    <div>
      <Appbar value={userOnHomeUser} />
    </div>
  );
}

export default Home;
