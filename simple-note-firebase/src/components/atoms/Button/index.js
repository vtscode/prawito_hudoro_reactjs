import React from 'react';

const ButtonTekan = ({title,saatTekan, loading}) => {
    if(loading){
       return (<button disabled>Loading...</button>)
    }
    return (
        <button onClick={saatTekan}>{title}</button>
    )
};

export default ButtonTekan;