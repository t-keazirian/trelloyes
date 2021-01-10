import React from 'react';
import { List } from "./List";
import { Card } from './Card';

function App(STORE) {
  return (
    <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        <List />
        <List />
        <List />
        <List />
      </div>
    </main>
  );
}

export default App;
