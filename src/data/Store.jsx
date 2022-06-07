import React, { useState } from "react";

const initialState = {
    number: 1234,
    text: "Context API + Hooks"
};

export const AppContext = React.createContext(initialState);

export default function Store(props)    {
    const [ state, setState ] = useState(initialState);

    function updateState(key, newValue) {
        setState({
            ...state,
            [key]: newValue
        })
    }

    return (
        <AppContext.Provider value={
            {
                number: state.number,
                text: state.text,
                setNumber: number => updateState("number", number),
                setText: text => updateState("text", text)
            }
        }>
            <div>
                {props.children}
            </div>
        </AppContext.Provider>
    );
}