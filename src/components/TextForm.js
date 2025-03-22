import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);

  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Convert to Upper Case", "success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Convert to Lower Case", "success");
    document.title = "TextUtil - Converted to Lower";
  };

  const handleClearClick = () => {
    setText("");
    setEmails([]); // Clear emails when text is cleared
    props.showAlert("Your Text is Removed !", "danger");
  };

  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    extractEmails(inputValue);
  };
  const handelCopy = () => {
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your Text is Copy !", "success");
  };

  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space is Removed !", "success");
  };

  // Function to extract emails using regex
  const extractEmails = (inputText) => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const foundEmails = inputText.match(emailRegex) || [];
    setEmails(foundEmails);
  };

  // Word count logic (removes extra spaces)
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readingTime = (wordCount * 0.008).toFixed(2);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <h1>
            <b>{props.heading}</b>
          </h1>
          <div className="form-group">
            <textarea
              value={text}
              onChange={handleOnChange}
              className="form-control"
              id="myText"
              rows="6"
              placeholder="Enter your text here..."
            />
            <button
              className="mt-3 btn btn-primary mx-1"
              onClick={handleUpperClick}
              disabled={text.length === 0}
            >
              Convert to Uppercase
            </button>
            <button
              className="mt-3 btn btn-primary mx-1"
              onClick={handleLowerClick}
              disabled={text.length === 0}
            >
              Convert to Lowercase
            </button>
            <button
              className="mt-3 btn btn-primary mx-1"
              onClick={handelCopy}
              disabled={text.length === 0}
            >
              Copy Text
            </button>

            <button
              className="mt-3 btn btn-primary mx-1"
              onClick={handelExtraSpace}
              disabled={text.length === 0}
            >
              Remove Extra Spaces
            </button>

            <button
              className="mt-3 btn btn-danger mx-1"
              onClick={handleClearClick}
              disabled={text.length === 0}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h3>
            <b>Your Text Summary</b>
          </h3>
          <p>
            {wordCount} Words and {charCount} Characters
          </p>
          <p>{readingTime} Minutes Read</p>
          <h3>
            <b>Extracted Emails</b>
          </h3>
          <p className="text-muted">{emails + " "} </p>
          <h3>
            <b>Preview</b>
          </h3>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </div>
  );
}
