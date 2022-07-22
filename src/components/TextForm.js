import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }
    const handleClearClick = ()=>{
        
        let newText = ''
        setText(newText)
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    // text = "new text" // Wrong way to change the state
    // setText("new text") // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e':'white', color: props.mode === 'dark' ? 'white':'#042743'}} value={text}></textarea>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>Convert to Upper Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleLoClick}>Convert to Lower Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleClearClick}>Clear Text</button>
    </div>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text: "Nothing to Preview"}</p>
    </div>
    </>
  )
}
