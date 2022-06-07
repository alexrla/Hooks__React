import React, { useEffect, useState } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calculateFactorial(num)    {
    if(num <= 0) {
        if(num < 0) return "Não existe";
        else    return 1;
    }
    return calculateFactorial(num - 1) * num;
}

function evenOrOdd(num)    {
    if(num % 2 === 0)   return "PAR";
    else return "ÍMPAR";
}

export default function UseEffect(props)    {
    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);
    const [evenOdd, setEvenOdd] = useState("");
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const tasksStorage = localStorage.getItem("tasks");

        if(tasksStorage)    {
            setTasks(JSON.parse(tasksStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask()  {
        setTasks([...tasks, input]);

        setInput("");
    }

    // Quando o number for modificado, automaticamente, a função será chamada;
    // Com a função declarada, dentro do useEffect, não teremos mais um loop infinito de renderizações;
    useEffect(function()    {
        setFactorial(calculateFactorial(number));
    }, [number]);

    useEffect(function()    {
        setEvenOdd(evenOrOdd(number));
    }, [number]);

    /*
       * Não podemos chamar:
       *    setFactorial(calculateFactorial(number));
       * 
       * algo que vai alterar o estado, fora do useEffect() 
       * e diretamente, dentro do corpo da função, pois ele vai
       * acabar renderizando o componente, de forma infinita;
    */

    return (
        <div className="useEffect">
            <PageTitle title="Hook UseEffect" subtitle="Permite executar efeitos colaterais em componentes funcionais!" />
        
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red"> {factorial}</span>
                </div>

                <input type="number" value={number} className="input" onChange={(event) => setNumber(event.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul style={{marginTop: "5px"}}>
                    {tasks.map((task) => (
                        <li className="text" key={task}>{task}</li>
                    ))}
                </ul>

                <input type="text" value={input} className="input" onChange={(event) => setInput(event.target.value)} />
                <button className="btn" onClick={addTask}>Adicionar tarefa</button>
            </div>

            <SectionTitle title="Desafio" />
            <div className="center" style={ {marginTop: "10px"} }>
                <div>
                    <span className="text">Número:</span>
                    <span className="text red"> {evenOdd}</span>
                </div>

                <input type="number" value={number} className="input" onChange={(event) => setNumber(event.target.value)} />
            </div>
        </div>
    );
}