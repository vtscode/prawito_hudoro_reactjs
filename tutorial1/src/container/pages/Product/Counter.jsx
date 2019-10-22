import React , {Component} from 'react';
import {connect} from 'react-redux';
import actionType from '../../../redux/reducer/globalActionType';
import { rootContext } from '../../Home/Home';

class Counter extends Component{

    // state = {
    //     order:4,
    //     name:'Riventus'
    // }

    // handleCounterChange = (newVal) =>{
    //     // pada statefull harus ada this.props bukan props saja
    //     this.props.onCounterChange(newVal);
    // }

    // handlePlus = () => {
    //     // console.log(this);
    //     this.setState({
    //         order: this.state.order +1
    //     },() => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }
    
    // handleMinus = () => {
    //     // console.log(this);
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order -1
    //         },() => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }
    
    render(){
        // console.log(this.props);
        return(
            <rootContext.Consumer>
                {
                    value => {
                        // console.log(value);
                        return (
                            <div className="counter">
                                {/*<button className="minus" onClick={this.props.handleMinus}>-</button>
                                <input readOnly type="text" value={this.props.order} />
                        <button className="plus" onClick={this.props.handlePlus}>+</button>*/}
                                <button className="minus" onClick={() => value.dispatch({type:actionType.SUBTRACT_ORDER})}>-</button>
                                <input readOnly type="text" value={value.state.totalOrder} />
                                <button className="plus" onClick={() => value.dispatch({type:actionType.ADD_ORDER})}>+</button>
                            </div>
                        )
                    }
                }
            </rootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order:state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({type:actionType.ADD_ORDER}),
//         handleMinus: () => dispatch({type:actionType.SUBTRACT_ORDER})
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
export default Counter;