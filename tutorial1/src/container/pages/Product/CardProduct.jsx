import React , {Component} from 'react';

class CardProduct extends Component{

    state = {
        order:4
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
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input readOnly type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;