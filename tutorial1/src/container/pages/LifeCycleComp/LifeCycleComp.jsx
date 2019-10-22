import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import { globalConsumer } from '../../../context/Context';

class LifeCycleComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:1
        }  
        console.log('constructor') 
    }

    static getDerivedStateFromProps(props,state) {
        console.log('getDerivedStateFromProps')
        return null; 
        
    }
    
    componentDidMount(){
        console.log('componentDidMount') 
        // setTimeout(() => {
        //     this.setState({
        //         count:2
        //     })
        // },3000)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps:',nextProps)
        console.log('nextState:',nextState) 
        console.log('this state:',this.state) 
        console.groupEnd();
        // jika return tidak true maka akan berhenti
        /*
        hal ini sangat berguna jika dlm marketplace ada cart utk membatasi pembelian sesuai dengan stock barang yg tersedia, utk tidak diupdate terus menerus
        */ 
        if(nextState.count >= 4) return false;
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate') 
        return null;
    }


    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate') 

    }

    componentWillUnmount() {
        console.log('componentWillUnmount') 
        
    }

    changeCount = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){
        console.log('render') 

        return(
                <Fragment>
                    <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
                    <hr />

                    {/*<p>Total Order : {this.props.order}</p>*/}
                    <p>Total Order : {this.props.state.totalOrder}</p>

                </Fragment>
            );
    }
}
// const mapStateToProps = state => {
//     return {
//         order:state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycleComp);
export default globalConsumer(LifeCycleComp);