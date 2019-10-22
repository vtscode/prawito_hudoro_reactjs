import React , {Component,Fragment} from 'react';
import CardProduct from './CardProduct';

class Product extends Component{

    state = {
        order:4,
        name:'Riventus'
    }

    handleCounterChange = (newValue) =>{
        this.setState({
            order:newValue
        })
    } 

    render(){
        return(
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="asdasd" alt="asd" />
                </div>
                <div className="troley">
                    <img src="asdasd" alt="asd" />
                    <div className="count">{this.state.order}</div>
                </div>
            </div>
            <hr/>
            <CardProduct onCounterChange={(val)=>this.handleCounterChange(val)} />
            </Fragment>
        )
    }
}

export default Product;