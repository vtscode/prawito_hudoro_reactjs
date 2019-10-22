import React,{Component,createContext} from 'react';
import actionType from '../redux/reducer/globalActionType';

const rootContext = createContext();

// High Order Component utk Provider
const Provider = rootContext.Provider;
const globalProvider = (Children) => {
    return(
        class parentComp extends Component{

            constructor(props) {
                super(props);
                this.state = {
                    showComp : true,
                    totalOrder:0
                }
            }
        
            dispatchContext = action => {
                switch(action.type){
                    case actionType.ADD_ORDER:
                        return this.setState({
                            totalOrder:this.state.totalOrder + 1
                        })
                        break;
                    case actionType.SUBTRACT_ORDER:
                        if(this.state.totalOrder > 0){
                            return this.setState({
                                totalOrder:this.state.totalOrder - 1
                            })
                        }
                        break;
                    default:
                        return this.state;
                        break
                }
            }
            
            componentDidMount() {
                // setTimeout(()=> {
                //     this.setState({
                //         showComp:false
                //     })
                // },6000)
            }

            render(){
                return(
                    <Provider value={
                        {
                            state:this.state,
                            dispatch:this.dispatchContext
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    );
}

export default globalProvider;

// High Order Component utk Consumer
const Consumer = rootContext.Consumer;
export const globalConsumer = (Children) => {
    return (
            class parentConsumer extends Component{
                render(){
                    return(
                        <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                        </Consumer>
                    )
                }
            }
            
        )
    }
    