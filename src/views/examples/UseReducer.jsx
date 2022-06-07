import React, { useReducer } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    // ...
    number: 0
};

function reducer(state, action)  {
    switch(action.type) {
        case "numberAddition2":
            return {...state, number: state.number + 2};
        case "numberAdditionN":
            return {...state, number: state.number + action.payload};
        case "numberSubtraction2":
            return {...state, number: state.number - 2};
        case "numberMultiplication7":
            return {...state, number: state.number * 7};
        case "numberDivision25":
            return {...state, number: state.number / 25};
        case "numberInteger":
            return {...state, number: parseInt(state.number)};
        case "login":
            return {...state, user: { name: action.payload }};
        default:
            return state;
    }
}

export default function UseReducer(props)  {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div className="useReducer">
            <PageTitle title="Hook UseReducer" subtitle="Uma outra forma de ter estado em componentes funcionais!" />
        
            <SectionTitle title="Exemplo #01" />
            <div className="center">
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={() => dispatch({type: "numberAddition2"})}> +2 </button>
                    <button className="btn" onClick={() => dispatch({type: "numberAdditionN", payload: 5})}> n </button>
                    <button className="btn" onClick={() => dispatch({type: "numberSubtraction2"})}> -2 </button>
                    <button className="btn" onClick={() => dispatch({type: "numberMultiplication7"})}> ×7 </button>
                    <button className="btn" onClick={() => dispatch({type: "numberDivision25"})}> ÷25 </button>
                    <button className="btn" onClick={() => dispatch({type: "numberInteger"})}> Z </button>
                </div>
            </div>

            <SectionTitle title="Exemplo #02" />
            <div className="center">
                    { 
                        state.user ?
                            <span className="text">{state.user.name}</span> : 
                            <span className="text">Sem usuário</span>
                    }
                
                <div>
                    <button className="btn" onClick={() => dispatch({type: "login", payload: "Alex"})}> Logar </button>
                </div>
            </div>
        </div>
    );
}
