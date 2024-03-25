import { useEffect, useState } from 'react'
import './App.css'
import BeginGame from './BeginGame';
import ChooseCharacter from './Composents/ChooseCharacter';


function App() {
  const [showCharacterSelection, setShowCharacterSelection] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
 
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const endTurn = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1); 
  };
    // Fonction pour gérer les actions du joueur 1
    const player1Action = () => {
      // Actions du joueur 1 ici
      console.log('Joueur 1 a joué');
      endTurn(); // Passez au joueur suivant
    };
  
    // Fonction pour gérer les actions du joueur 2
    const player2Action = () => {
      // Actions du joueur 2 ici
      console.log('Joueur 2 a joué');
      endTurn(); // Passez au joueur suivant
    };

  
    const handleCharacterSelect = (character) => {
      setSelectedCharacter(character); // Mettre à jour le personnage sélectionné
      setShowCharacterSelection(false); // Cacher l'écran de sélection des personnages
    };
  return (
    <>

      
      
       <BeginGame/>
       {showCharacterSelection && (
        <ChooseCharacter onSelectCharacter={handleCharacterSelect} />
      )}
      {!showCharacterSelection && (
        <div>
          <h1>Jeu principal</h1>
          <p>Personnage sélectionné : {selectedCharacter}</p>
        </div>
      )}

       {currentPlayer === 1 ? (
        <button onClick={player1Action}>Action Joueur 1</button>
      ) : (
        <button onClick={player2Action}>Action Joueur 2</button>
      )}

    </>
  )
}



export default App
