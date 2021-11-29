import React, { useState, useEffect } from 'react';
import { interval, fromEvent, merge } from 'rxjs';
import { filter, buffer, debounceTime, map, mapTo } from 'rxjs/operators';
import s from './style.module.css';
import Controls from '../Controls';

function App() {
  const [counter, setCounter] = useState(0);
  const [buttonState, setButtonState] = useState('');

  useEffect(() => {
    const stream$ = interval(1000);
    const subscribe$ = stream$
      .subscribe(
        () => {
          if (buttonState === 'start') {
            setCounter(prevCounter => prevCounter + 1);
            console.log('start');
          }
        }
      );

    if (buttonState === 'stop') {
      setCounter(0);
      subscribe$.unsubscribe();
      console.log('stop');
    }

    if (buttonState === 'wait') {
      subscribe$.unsubscribe();
      console.log('wait');
    }

    if (buttonState === 'reset') {
      setCounter(0);
      subscribe$.unsubscribe();
      setButtonState('start');
      console.log('reset');
    }

    return () => subscribe$.unsubscribe();
  }, [buttonState]);
  

  //======= button click listener =======
  useEffect(() => {

    const clickListener$ = fromEvent(
      document.querySelectorAll('button'),
      'click'
    );

    const oneClick$ = clickListener$
      .pipe(
        filter(e => e.target.dataset.btn !== 'wait'),
        map(e => e.target.dataset.btn)
      );

    const doubleClick$ = clickListener$
      .pipe(
        filter(e => e.target.dataset.btn === 'wait'),
        buffer(clickListener$.pipe(debounceTime(300))),
        // if array is greater than 1, double click occured
        map(value => value.length),
        //get value of array length
        filter(value => value === 2),
        mapTo('wait')
    );

    const click$ = merge(oneClick$, doubleClick$)
      .subscribe(e => {
        // console.log(e);
        setButtonState(e);
    });

    return () => click$.unsubscribe();
  }, []);

  return (
    <div className={s.App}>
      <header className={s.App_header}>
        <span>{counter}</span>
        <Controls />
      </header>
    </div>
  );
}

export default App;
