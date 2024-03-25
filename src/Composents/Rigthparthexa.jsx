import Hexagonal from "./Hexagonal";
import Card from "./Card"


export default function Leftparthexa({ backgroundImage, handleClick, isActive, spellCard, handleClickForTakeSpell}) {

    return (
        <div className="o o-first-lane o-hexacard">

        <div className="hexagone">
          <div className="hexagonemain">
          <Hexagonal backgroundImage={backgroundImage} onClick={handleClick} isActive={isActive} />
          </div>
        </div>

     <Card spellCard={spellCard} handleClickForTakeSpell ={handleClickForTakeSpell}/>
      </div>
    )
    }