

export default function Card({ spellCard, handleClickForTakeSpell }) {

    return (

        <div className="a-card"><button onClick={handleClickForTakeSpell}><img src={ spellCard } alt="" /></button></div>

    )
    }