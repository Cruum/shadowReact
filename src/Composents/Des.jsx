import React, { useState } from 'react';

export default function Des({resultat, listResultats, lancer, ressourcesDes}) {

    return (
        <div>
            <button onClick={lancer}>Lancer</button>
            <p id="message"></p>
            <div id="listResultats">
                <ul className='o-listDes'>
                    {ressourcesDes.map((item, index) => (
                        <li className='m-listDes' key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
