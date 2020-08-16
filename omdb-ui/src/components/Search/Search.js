import React from 'react';
import './Search.css';

export default function Search(props) {
  const value = props.value;
  const handleChange = (e) => props.onChange(e.target.value);
  const handleSubmit = () => props.onSubmit(value);

  return (
    <>
    <div className="header">
      <h1>The Movie Search</h1>
    </div>
    <div className = "bg">
      <input className="search clear-margin-top" placeholder="Enter movie to search for.." type="text" value={value} onChange={handleChange} style = {{float : "right"}}/>
      <button className="btn btn-success clear-margin-top" onClick={handleSubmit}>Search</button>
    </div>
    </>
  )
}