import React from 'react';
import s from './style.module.css';
import Controls from '../Controls';

function App() {

  return (
    <div className={s.App}>
      <header className={s.App_header}>
        <Controls />
      </header>
    </div>
  );
}

export default App;
