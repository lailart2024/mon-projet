import React from 'react';

function ContactInfo() {
  return (
    <>
      <h3 className="title">Contact info</h3>
      <ul>
        <li><span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span><span className="text">+212 6 12 01 43 30</span></li>
        <li><span className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></span><span className="text"> Date et lieu de naissance :08/09/2002-Khouribga</span></li>
        <li><span className="icon"><i className="fa fa-envelope-open" aria-hidden="true"></i></span><span className="text">diafilaila2002@gmail.com</span></li>
        <li><span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span><span className="text">Diafi Laila</span></li>
        <li><span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span><span className="text">Lot Saidia 2 , Marjane 1 , Meknes</span></li>
      </ul>
    </>
  );
}

export default ContactInfo;