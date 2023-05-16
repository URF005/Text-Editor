import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.mymsg("Converted");
  };
  const handleonchnage = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      {/* Concept of stats */}
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonchnage}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary "
        onClick={handleupclick}
        disabled={text.length===0}
      >
        Convert to Upper case
      </button>
      <h2 className="mt-4">Your text Summary</h2>
      <p className="mt-3">
        {text.trim() === "" ? 0 : text.match(/\S+/g).length} <b>words</b> and{" "}
        {text.replace(/\s+/g, "").length} &nbsp;
        <b>characters</b>
      </p>
    </>
  );
}
