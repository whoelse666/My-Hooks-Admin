import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '@/redux/reducers/counterSlice';
import {
  todoAdded, todoToggled, selectTodos
} from '@/redux/reducers/todosSlice';
import styles from './Counter.module.css';

function TodoList() {
  const count = useSelector(selectCount);
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  console.log('todos', todos)
  return (
    <div style={{ color: 'black',backgroundColor:'#ffffff',height:'100%' }}>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>

      <div className={styles.border}>
        <h3>todosSlice</h3>
        <div>
          {todos.map(item => {
            return (<p key={item.id}>
              <input type="radio" checked={item.completed} />
              {item.id} - {item.text}</p>)
          }
          )}
        </div>

        <button
          className={styles.button}
          onClick={() =>
            dispatch(todoAdded({
              id: todos.length + 1,
              text: '天外来物',
              completed: false
            }))
          }
        >
          add item
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => {
            console.log('todos.length', todos.length)
            dispatch(todoToggled(Math.ceil(Math.random() * todos.length)))
          }}
        >
          find by id
        </button>
      </div>
    </div>
  );
}

export default TodoList