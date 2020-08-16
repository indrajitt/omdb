import React from 'react';

export default function List(props) {
  const elements = props.elements || []; // Array of movies
  const component = props.component; // Card component

  const createReactElement = (element) => {
    return React.createElement(component, { movie: element, key: element.imdbID })
  }

  return (
    <div className="row">
      {elements.map(e => createReactElement(e))}
    </div>
  )
}