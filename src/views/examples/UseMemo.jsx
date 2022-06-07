import React, { useState, useEffect, useMemo } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

export default function UseMemo(props)   {
    const [ n1, setN1 ] = useState(0);
    const [ n2, setN2 ] = useState(0);
    const [ n3, setN3 ] = useState(0);
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

    const totalTasks = useMemo(() => tasks.length, [tasks]);

    function sum(valueA, valueB)    {
        const future = Date.now() + 2000;

        // Espera de 2s...
        while(future > Date.now()) {}

        return valueA + valueB;
    }

    /*
        Resolvendo o problema com o useState e o useEffect:
            const [ result, setResult ] = useState(0);

            useEffect(function()    {
                setResult(sum(n1, n2)); 
            }, [n1, n2])
    */

    const result = useMemo(() => sum(n1, n2), [n1, n2]);

    return (
        <div className="useMemo">
            <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
        
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <input type="number" value={n1} className="input" onChange={(event) => setN1(parseInt(event.target.value))} />

                <input type="number" value={n2} className="input" onChange={(event) => setN2(parseInt(event.target.value))} />

                <input type="number" value={n3} className="input" onChange={(event) => setN3(parseInt(event.target.value))} />
            
                <span className="text">{result}</span>
            </div> 

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul style={{marginTop: "5px"}}>
                    {tasks.map((task) => (
                        <li className="text" key={task}>{task}</li>
                    ))}
                </ul>

                <br />

                <strong className="text red">{totalTasks} tarefas cadastradas</strong>
                <input type="text" value={input} className="input" onChange={(event) => setInput(event.target.value)} />
                <button className="btn" onClick={addTask}>Adicionar tarefa</button>
            </div>
        </div>
    );
}