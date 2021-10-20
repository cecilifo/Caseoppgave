import React, { useState } from 'react';
import Text from './Text';
import './App.css';

function Reiseforsikring() {

    const [user] = useState([
        {name: "Per Andreas Hansen", amount: 249, periodstart: "01.01.2021",
        periodend: "01.01.2022", number: 123456789, document: "Avtaledokument(PDF)"}
      ]); 

    return (
        <div className="forsikring">
            {user.map(user => (
             <Text name={user.name} amount={user.amount}
             periodstart={user.periodstart} periodend={user.periodend}
             number={user.number} document={user.document}/>
            ))}
            <img src="/images/logo.png" alt="" />
        </div>
    );
}

export default Reiseforsikring;