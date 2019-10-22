import React , {Component,Fragment} from 'react';
import CardProduct from './CardProduct';
import { connect } from "react-redux";
import { globalConsumer } from '../../../context/Context';

class Product extends Component{

    // state = {
    //     order:4,
    //     name:'Riventus'
    // }

    // handleCounterChange = (newValue) =>{
    //     this.setState({
    //         order:newValue
    //     })
    // } 

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="asdasd" alt="asd" />
                    </div>
                    <div className="troley">
                        <img src="asdasd" alt="asd" />
                        {/*<div className="count">{this.props.order}</div>*/}
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <hr/>
                <CardProduct />
            </Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         order:state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default globalConsumer(Product);