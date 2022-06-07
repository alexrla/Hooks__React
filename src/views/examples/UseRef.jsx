import React, { useState, useRef, useEffect } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

/*
- Primeira solução
    Variáveis globais:
        let sizeString1 = 0;
        let sizeString2 = 0;
        let counterString1 = 0;
        let counterString2 = 0;
        let string = "";

    function merge(string1, string2)    {
        if(string1.length > sizeString1)    {
            string += string1[counterString1];

            sizeString1 = string1.length;
            counterString1++;
        }
        
        if(string2.length > sizeString2)    {
            string += string2[counterString2];

            sizeString2 = string2.length;
            counterString2++;
        } 

        return string;
    }
*/

export default function UseRef(props)   {
    const [ value1, setValue1 ] = useState("");
    const [ value2, setValue2 ] = useState("");

    // Basicamente, count é um objeto;
    // useRef - retorna a referência do objeto;
    const count = useRef(0);
    const myInputOne = useRef(null);
    const myInputTwo = useRef(null);

    useEffect(function()    {
        count.current = count.current + 1;
        // count.current++;

        myInputTwo.current.focus();
    }, [value1]);

    useEffect(function()    {
        count.current++;
        myInputOne.current.focus();
    }, [value2]);

    
    function merge(string1, string2)    {
        return [...string1].map((letter, index) => 
            `${letter}${(string2[index] || "")}`
        ).join("");
    }

    return (
        <div className="UseRef">
            <PageTitle title="Hook UseRef" subtitle="Retorna um objeto mutável com a propriedade .current" />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" value={value1} className="input" ref={myInputOne} onChange={(event) => setValue1(event.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input" value={value2} ref={myInputTwo} onChange={event => setValue2(event.target.value)} />
            </div>
        </div>
    );
}
