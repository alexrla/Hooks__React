import { useState } from 'react';

export default function useCounter(initialValue = 100)    {
    const [ count, setCount ] = useState(initialValue);

    function increment()    {
        setCount(count + 1);
    }

    function decrement()    {
        setCount(count - 1);
    }

    return [count, increment, decrement];
}