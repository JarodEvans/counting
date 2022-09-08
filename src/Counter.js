import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Counter(){
    const [count, setCount] = useState(0);
    
    useEffect(()=>{

        return(
          console.log("useEffect()")
        )
      }, [count]);

    return (
      <>
        <>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>
            Click me to increase lol
          </button>
        </>
      </>
    );
}

Counter.propTypes={
    count: PropTypes.number
};

export default Counter;