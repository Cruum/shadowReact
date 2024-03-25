import { useEffect, useState } from 'react'
import './App.css'
import Leftparthexa from './Composents/Leftparthexa'
import Rigthparthexa from './Composents/Rigthparthexa'
import Hexagonal from './Composents/Hexagonal'
import Players from './Composents/Players'
import Card from "./Composents/Card";
import Timer from './Composents/Timer'
import Des from './Composents/des'

const images = [
  '/img/1007550.jpg',
  '/img/1014466.jpg',
  '/img/1028306.png',
  '/img/1042578.png',
  '/img/1588193247_493_notitle-Best-Anime-Wallpaper-768x403.jpg',
  '/img/anime_futuristic_ass_anime_girls-357182.jpg',
  '/img/anime_Oshi_no_Ko_anime_boys-2239438.jpg',
  '/img/Fond-Decran-Anime-4k-1536x1032.jpg',
]

// const arrayCartSpell =[
//   '/img/1007550.jpg',
//   '/img/1014466.jpg',
//   '/img/1028306.png',
//   '/img/1042578.png',
//   '/img/1588193247_493_notitle-Best-Anime-Wallpaper-768x403.jpg',
//   '/img/anime_futuristic_ass_anime_girls-357182.jpg',
//   '/img/anime_Oshi_no_Ko_anime_boys-2239438.jpg',
//   '/img/Fond-Decran-Anime-4k-1536x1032.jpg',
// ]


function App() {
  const [hexagonImageIndexes, setHexagonImageIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [activeHexagonIndex, setActiveHexagonIndex] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [spellCards, setSpellCards] = useState([
    null, null, null, null, null, null, null, null, null
  ]);
  const [arrayCartSpell, setArrayCartSpell] = useState([
    '/img/1007550.jpg',
    '/img/1014466.jpg',
    '/img/1028306.png',
    '/img/1042578.png',
    '/img/1588193247_493_notitle-Best-Anime-Wallpaper-768x403.jpg',
    '/img/anime_futuristic_ass_anime_girls-357182.jpg',
    '/img/anime_Oshi_no_Ko_anime_boys-2239438.jpg',
    '/img/Fond-Decran-Anime-4k-1536x1032.jpg',
  ])
  const [spellPlayer, setSpellPlayer] = useState([])
  
  const handleClick = (hexagonIndex) => {
    setActiveHexagonIndex(hexagonIndex);
    setHexagonImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[hexagonIndex] = (newIndexes[hexagonIndex] + 1) % images.length;
      setIsActive(true)
      return newIndexes;
    });
    if (arrayCartSpell.length > 0) {
      
      setSpellCards(() => {
        const newSpellCards = [...arrayCartSpell];
        return newSpellCards;
      });
    }
    
  };
  const handleClickForTakeSpell = (index) => {
    const selectSpell = spellCards[index];
    const newSpellCards = [...spellCards];
    console.log(newSpellCards);
    
    if (spellPlayer.length < 6) {
      const newSpellPlayer = [...spellPlayer, newSpellCards[index]];
      console.log(newSpellPlayer);
      setSpellPlayer(newSpellPlayer);
      newSpellCards.splice(index, 1, newSpellCards[6]);
    }
    
    
    if (newSpellCards.length > 6) {
      newSpellCards.pop(newSpellCards[6])
    }
    setSpellCards(newSpellCards);
    
    
  }
  
  const [ressourcesDes, setRessourcesDes] = useState([null, null, null, null, null])
  const [resultat, setResultat] = useState([null, null, null, null, null]);
  const [listResultats, setListResultats] = useState([]);
  const faceImages = [
    '../img/des/world.jpg',
    '../img/des/kameha.jpg',
    '../img/des/lame.png',
    '../img/des/meteore.jpg',
    '../img/des/rasengan.png',
    '../img/des/violet.jpg'
];
  const lancerDes = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    return result;
};

const lancerTousLesDes = () => {
  setRessourcesDes([]);
  setListResultats([]);
  // Générer de nouveaux dés
  const newRessourcesDes = Array.from({ length: 5 }, () => {
      const result = lancerDes();
      setListResultats(prevList => [result - 1, ...prevList]);
      return <img src={faceImages[result - 1]} alt={`Face ${result}`} />;
  });
    setRessourcesDes(newRessourcesDes);
    console.log(ressourcesDes);
    console.log(listResultats);
};
  ;

  return (
    <>
      <div>
        <header>
          <h1> CASTING SHADOW </h1>
        </header>


        <div className="p-shadow">

          <Players spellPlayer={spellPlayer} />

          <article className="p-game">
            <section className="t-game first">

              <article>
                <p>Vos Pv</p>
                <p>Pv adverse</p>
                <Timer />
              </article>

              <article className="t-hexa">
                <Leftparthexa
                  onClick={() => handleClick(0)}
                  backgroundImage={images[hexagonImageIndexes[0]]}
                  isActive={isActive}
                  spellCard={spellCards[0]}
                  handleClickForTakeSpell={() => handleClickForTakeSpell(0)}
                />
                <Rigthparthexa
                  onClick={() => handleClick(1)}
                  backgroundImage={images[hexagonImageIndexes[1]]}
                  isActive={isActive}
                  spellCard={spellCards[1]} // Utilisez spellCard[1] pour le deuxième hexagone
                  handleClickForTakeSpell={() => handleClickForTakeSpell(1)}
                />
              </article>
            </section>


            <section className="ligne">

              <Leftparthexa onClick={() => handleClick(2)}
                backgroundImage={images[hexagonImageIndexes[2]]}
                handleClickForTakeSpell={() => handleClickForTakeSpell(2)}
                isActive={isActive} spellCard={spellCards[2]} />

              <div className="hexagone" onClick={() => handleClick(3)}>
                <div className="hexagonemain">
                  <Hexagonal
                    onClick={() => handleClick(3)}
                    backgroundImage={images[hexagonImageIndexes[3]]}
                    isActive={isActive}

                  />
                </div>
              </div>

              <Rigthparthexa onClick={() => handleClick(4)}
                backgroundImage={images[hexagonImageIndexes[4]]}
                handleClickForTakeSpell={() => handleClickForTakeSpell(3)}
                isActive={isActive}
                spellCard={spellCards[3]} />

            </section>


            <section className="first second">

              <Leftparthexa onClick={() => handleClick(5)}
                backgroundImage={images[hexagonImageIndexes[5]]}
                handleClickForTakeSpell={() => handleClickForTakeSpell(4)}
                isActive={isActive}
                spellCard={spellCards[4]} />

              <Rigthparthexa onClick={() => handleClick(6)}
                backgroundImage={images[hexagonImageIndexes[6]]}
                handleClickForTakeSpell={() => handleClickForTakeSpell(5)}
                isActive={isActive}
                spellCard={spellCards[5]} />
            </section>

          </article>


          <Players spellPlayer={spellPlayer} />



          <section className="t-compagnons">
            <div> <img src="" alt="" /></div>
            <div> <img src="" alt="" /></div>
            <div> <img src="" alt="" /></div>
          </section>

          <section>
            <div> <img src="" alt="" /></div>
            <div> <img src="" alt="" /></div>
          </section>

        </div>

        <footer>
          <button onClick={handleClick}> Commencer une partie </button>
          <section>
            <h3>Ressources</h3>

        <Des resultat={resultat} ressourcesDes={ressourcesDes} listResultats={listResultats} lancer={() =>lancerTousLesDes()}/>
          </section>
        </footer>

      </div>
    </>
  )
}



export default App
