import Card from "./Card";
import CardSpellPlayer from "./CardSpellPlayer";



export default function Players({spellPlayer}) {

  console.log(spellPlayer);
    return (
<section className="t-player">

<img className="a-monster" src="" alt="" />

<div className="o">
  <h3>Grimoire de sorts</h3>
  <div className="m">
   <CardSpellPlayer spellPlayer={spellPlayer[0]}/>
   <CardSpellPlayer spellPlayer={spellPlayer[1]}/>
   <CardSpellPlayer spellPlayer={spellPlayer[2]}/>
   <CardSpellPlayer spellPlayer={spellPlayer[3]}/>
   <CardSpellPlayer spellPlayer={spellPlayer[4]}/>
   <CardSpellPlayer spellPlayer={spellPlayer[5]}/>

  </div>
</div>
</section>
    )
    }