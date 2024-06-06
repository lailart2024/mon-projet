import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Mettre à jour toutes les secondes

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <footer>
        <p>Edité par Diafi Laila</p>
      </footer>
      <footer className="foot">
        <p>© {formattedDate} Copyright</p>
      </footer>
    </>
  );
}

export default Footer;