import React from 'react';

function Languages(props) {
  return (
    <div className="elm">
      <h3 className="title">Langues</h3>
      <ul>
        <li>
          Anglais
          <div className="progress">
            <div className="progress-bar" style={{ width: `${props.anglais}%` }}></div>
          </div>
        </li>
        <li>
          Français
          <div className="progress">
            <div className="progress-bar" style={{ width: `${props.francais}%` }}></div>
          </div>
        </li>
        <li>
          Arabe
          <div className="progress">
            <div className="progress-bar" style={{ width: `${props.arabe}%` }}></div>
          </div>
        </li>
        <li>
          Espagnol
          <div className="progress">
            <div className="progress-bar" style={{ width: `${props.espagnol}%` }}></div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Languages;