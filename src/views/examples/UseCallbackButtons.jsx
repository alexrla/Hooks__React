import React from 'react';

const UseCallbackButtons = props =>   {
    return (
        <div>
            <button className="btn" onClick={() => props.increment(6)}> +6 </button>
            <button className="btn" onClick={() => props.increment(12)}> +12 </button>
            <button className="btn" onClick={() => props.increment(18)}> +18 </button>
        </div>
    );
}

export default React.memo(UseCallbackButtons);