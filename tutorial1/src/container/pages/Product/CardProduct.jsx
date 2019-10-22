import React , {Component} from 'react';
import Counter from './Counter';

class CardProduct extends Component{

    state = {
        order:4,
        name:'Riventus'
    }

    handleCounterChange = (newVal) =>{
        // pada statefull harus ada this.props bukan props saja
        this.props.onCounterChange(newVal);
    }

    handlePlus = () => {
        // console.log(this);
        this.setState({
            order: this.state.order +1
        },() => {
            this.handleCounterChange(this.state.order);
        })
    }
    
    handleMinus = () => {
        // console.log(this);
        if(this.state.order > 0){
            this.setState({
                order: this.state.order -1
            },() => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="maksdmka" alt="asd" />
                </div>
                <p className="product-title">SAKMDKAM</p>
                <p className="product-price">12300</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;