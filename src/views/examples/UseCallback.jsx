import React, { useState, useEffect, useMemo, useCallback } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import UseCallbackButtons from './UseCallbackButtons';

export default function UseCallback(props)  {
    const [ count, setCount ] = useState(0);
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

    const addTask = useCallback(() => {
        setTasks([...tasks, input]);

        setInput("");
    }, [tasks, input]);

    const totalTasks = useMemo(() => tasks.length, [tasks]);

    const increment = useCallback(function (delta)   {
        setCount(current => current + delta);
    }, [setCount]);

    return (
        <div className="useCallback">
            <PageTitle title="Hook UseCallback" subtitle="Retorna uma função memoizada!" />
        
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>

                <UseCallbackButtons increment={increment} />
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
