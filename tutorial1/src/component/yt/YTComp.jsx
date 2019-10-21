import React from 'react';

// stateless component
const Youtube = (props) => {
    return (
        <div className="ytube">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/QkRRH21AYQo/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBxbhVxYx28Z9_gn4jakYLJKC6alA" />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
    </div>)
}
// default props utk props yg tidak disediakan
Youtube.defaultProps = {
    time : '0.00',
    title: 'g ada title',
    desc:'g ada desc'
}

export default Youtube;