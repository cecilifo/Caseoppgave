import React from 'react';
import './App.css';

function Text({name, amount, periodstart, periodend, number, document}) {
    return (
        <div className="text">
            <h1>Reiseforsikring</h1>
            <p>{name}</p>
            <br />
            <p><b>Du betaler {amount} kr/mnd</b></p>
            <a href="0" target="_blank"> Fakturaoversikt</a>
            <p><pre><b>Periode</b>        {periodstart}-{periodend}</pre></p>
            <p><pre><b>Avtalenummer</b>   {number}</pre></p>
            <p><pre><b>Dokument</b>       <a href="1" target="_blank">{document}</a></pre></p>
        </div>
    );
}

export default Text; 