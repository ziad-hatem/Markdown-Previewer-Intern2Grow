import { useState } from 'react'
import { marked } from 'marked'
import './App.css'

function App() {
  const [code, setCode] = useState('## Hello')
  const [id, setId] = useState('hello')
  const [compiled, setCompiled] = useState(`<h2 id=${id}>Hello</h2>`)
  const [hide, hidePreview] = useState(true)

  const openMD = () => {
    hidePreview(true)
  }

  const openPreview = () => {
    hidePreview(false)
  }

  const handleChange = (e) => {
    setCode(e.target.value)
    setId(e.target.value.slice(3))
    setCompiled(`<h2 id="${id}">${id}</h2>`)
  }

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">MarkDown</button>
          <button onClick={openPreview}>Preview</button>
        </div>
        {
        hide ? 
          <div>
            <textarea onChange={handleChange} value={code}/>
          </div> : 
          <div>
            <textarea value={compiled}/>
          </div>
        }
      </div>
    </>
  )
}

export default App
