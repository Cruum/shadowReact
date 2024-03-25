import { useState } from 'react';

function ChooseCharacter({ onSelectCharacter }) {
  const handleCharacterSelect = (character) => {
    onSelectCharacter(character); 
  };

  return (
    <div className='t-chooseCharacter'>
      <h2>Choisissez votre personnage :</h2>
      <div className='o'>
      <button onClick={() => handleCharacterSelect('ghoul')}>
        <img src="../img/personnages/ghoul.png" alt="" />
      </button>
      <button onClick={() => handleCharacterSelect('saitama')}>
        <img src="../img/personnages/saitama.jpg" alt="" />
      </button>
      </div>
    </div>
  );
}
export default ChooseCharacter;
