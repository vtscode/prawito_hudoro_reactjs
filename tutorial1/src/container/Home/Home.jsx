import React , {Component,Fragment} from 'react';
// import Youtube from '../../component/yt/YTComp';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Blog from '../BlogPost/BlogPost';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showComp : true
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
            <Fragment>
            {/*<p>Youtube Channel thumb</p>
            <hr/>
                <Youtube time="11.1" title="Youtube chanel 1" desc="ini desc dari ytube1" />
            <Youtube />*/}
            {/*<p>Counter</p>
            <hr/>
            <Product/>*/}
            {/*<p>Life Cycle Comp</p>
            <hr/>
            {
                this.state.showComp ? <LifeCycleComp /> : null
            }*/}

            <h3>Blog</h3>
            <hr/>
            {
                this.state.showComp ? <Blog /> : null
            }
            </Fragment>
        )
    }
}

export default Home;