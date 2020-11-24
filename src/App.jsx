import React from 'react';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { Users } from './components/Users';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import './App.scss';

export const App = () => (
  <main className="app">
    <Header />
    <Description />
    <Users />
    <Form />
    <Footer />
  </main>
);
