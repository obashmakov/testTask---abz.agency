import React from 'react';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { Users } from './components/Users';
import './App.scss';

export const App = () => (
  <main className="app">
    <Header />
    <Description />
    <Users />
  </main>
);
