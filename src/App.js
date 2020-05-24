import React from 'react';
import './App.css';
import MenuButton from './MenuButton';
import Jokes from './Jokes';
import Control from './Control';

function App() {
  return (
    <React.Fragment>
      <main>
        <MenuButton open={true} />

        <header>
          <h2>MSI 2020</h2>
        </header>

        <Control />

        <Jokes />
      </main>

      <aside className="favourite">
        <MenuButton open={false} />
        <Jokes />
      </aside>
    </React.Fragment>
  );
}

export default App;
