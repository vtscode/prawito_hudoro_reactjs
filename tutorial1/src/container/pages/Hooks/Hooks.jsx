import React, { Component,Fragment,useState,useEffect } from 'react';

// class Hooks extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count :0
//         }
//     }
    
//     setCount = () => {
//         this.setState({
//             count:this.state.count + 1
//         })
//     }
//     componentDidMount() {
//         document.title = `Title change: ${this.state.count}`;
//     }
//     componentDidUpdate(prevProps, prevState) {
//         document.title = `Title change: ${this.state.count}`;
//     }
//     componentWillUnmount() {
//         document.title = `ReactJS Hello World`;
//     }
    
//     render(){
//         return (
//             <Fragment>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.setCount}>
//                     Click me
//                 </button>
//             </Fragment>
//         );
//     }
// }

const Hooks = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = `Title change: ${count}`;
        return () => {
            document.title = `ReactJS Hello World`;
        }
    });

    return (
        <Fragment>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </Fragment>
    )
}

export default Hooks;