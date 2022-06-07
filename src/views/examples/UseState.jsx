import React, { useState } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

export default function UseState(props)   {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Alexa");
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    function addTask()  {
        setTasks([...tasks, input]);

        setInput("");
    }

    return (
        <div className="useState">
            <PageTitle title="Hook UseState" subtitle="Estado em componentes funcionais!" />
        
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}> -1 </button>
                    <button className="btn" onClick={() => setCount(count + 1)}> +1 </button>
                    {/*
                        Passando uma função dentro do setCount():

                        <button className="btn" onClick={() => setCount(current => current + 5)}> +5 </button>

                        *   Essa função recebe um parâmetro, que corresponde ao valor atual;
                    */}
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" placeholder="Digite algo..." value={name} className="input" onChange={(event) => setName(event.target.value)} />
                <span className="text">{name}</span>
            </div>

            <SectionTitle title="Exercício #03" />
            <div className="center">
                <ul style={{marginTop: "5px"}}>
                    {tasks.map((task) => (
                        <li className="text" key={task}>{task}</li>
                    ))}
                </ul>

                <input type="text" value={input} className="input" onChange={(event) => setInput(event.target.value)} />
                <button className="btn" onClick={addTask}>Adicionar tarefa</button>
            </div>
        </div>
    );
}