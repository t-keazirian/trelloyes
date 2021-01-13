import React from 'react';
import List from './List';
import './App.css';

function App(props) {

  console.log(props)
  
  const lists = props.store.lists.map(list => {
    // console.log('lists');
    // console.log(list);

    // Create an array of objects grabbed from the allCards property in the STORE
    // console.log('cardIds');
    let cards = list.cardIds.map(id => {
      // console.log(id);
      return props.store.allCards[id]
    });
    
    // Return a List component for each item in the lists array in the STORE
    return <List header={list.header} cards={cards} key={list.id} />
  });

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;
