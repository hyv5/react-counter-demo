import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>🎯 React Counter Demo</h1>
      <div className="card">
        <p className="count-display">{count}</p>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
            ➖ 减少
          </button>
          <button onClick={() => setCount(count + 1)}>
            ➕ 增加
          </button>
          <button onClick={() => setCount(0)}>
            🔄 重置
          </button>
        </div>
        <p className="hint">点击按钮试试！</p>
      </div>
    </div>
  )
}

export default App
