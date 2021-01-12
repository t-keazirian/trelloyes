import React from 'react';
import List from './List';
import './App.css';

function App(props) {

  // const lists = [];
  
  // for(let i=0; i < props.store.lists.length; i++) {
  //   const cards = [];

  //   for (let j=0; j < props.store.lists[i].cardIds.length; j++) {
  //     cards.push(props.store.allCards[props.store.lists[i].cardIds[j]]);
  //   }

  //   lists.push(<List header={props.store.lists[i].header} cards={cards} key={props.store.lists[i].id} />);
  // }
  
  const lists = props.store.lists.map(list => {
    console.log('lists');
    console.log(list);

    // Create an array of objects grabbed from the allCards property in the STORE
    console.log('cardIds');
    let cards = list.cardIds.map(id => {
      console.log(id);
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
