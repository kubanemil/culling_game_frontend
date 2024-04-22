// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import axios from 'axios';
import styles from './counters.module.css'


function api_call() {
  axios.get('http://localhost:8000/counter')
    .then(response => {
      console.log(response.status)
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })

}
function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    api_call();
    setCount(count+1)
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
