import React, { useState } from 'react';

export default function Card({ getCharacters }) {
    const [chars, setChars] = useState([getCharacters(5, 0)]);

    const changeSize = (e) => {
        let charsFilter = getCharacters(e.target.value, 0);
        setChars(charsFilter);
        console.log(charsFilter);
        console.log(chars);
    }
    return (
        <div>
            <input type="text" placeholder="Mostrar personajes" onChange={changeSize} />
            <ul>
                {
                    chars.map((el, index) => {
                        return (
                            <li key={index}>
                                <p>{el.name}</p>
                                <img alt={el.name} src={el.image} />
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}