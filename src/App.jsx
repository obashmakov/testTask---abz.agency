import React from 'react';
import { Header } from './components/Header';
import { Description } from './components/Description';
import './App.scss';

export const App = () => (
  <main className="app">
    <Header />
    <Description />
  </main>
);
