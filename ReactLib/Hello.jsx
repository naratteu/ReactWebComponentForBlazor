import { useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)
  return <>
    <h1>Hello, React!</h1>
    <button onClick={() => setCount(count => count + 1)}>
      count is {count}
    </button>
  </>
}