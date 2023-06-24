import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  // this will save changes done to text using event
  const handleChange = (event) => {
    console.log("onChange Click");
    setText(event.target.value);
  }


  const handleUpClick = () => {
    console.log("Submit Click : " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerClick = () => {
    console.log("Submit Click : " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }


  return (
    <>
      <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
          <h3>{props.heading}</h3>
          <div className="mb-3 my-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Text will be converted to camelCase</label>
              <textarea className="form-control" style={{color : props.mode === 'dark' ? 'white' : 'black', backgroundColor : props.mode === 'dark' ? 'grey' : 'white'}} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}> Click to Upper Case </button>
          <button className="btn btn-primary mx-2" onClick={handleLowerClick}> Click to Lower Case </button>
      </div>
      <div className="summary my-3 mx-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
          <h3>Text Summary</h3>
          <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  )
}

TextForm.defaultProps = {
    heading: "Enter Text : "
}