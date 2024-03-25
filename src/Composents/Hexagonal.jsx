// Hexagonal.jsx
import React from 'react';

const Hexagonal = ({ onClick, backgroundImage, isActive }) => {
  const hexagonStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%', // Ajustez la hauteur selon vos besoins
  };

  return (
    <div className="hexagonemainbefore" onClick={onClick} style={{ ...hexagonStyle, backgroundImage: isActive ? `url(${backgroundImage})` : 'none' }}>
      {/* Votre contenu ici */}
    </div>
  );
};

export default Hexagonal;
