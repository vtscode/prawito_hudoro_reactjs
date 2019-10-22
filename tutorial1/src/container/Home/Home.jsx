import React , {Component,Fragment,createContext} from 'react';
// import Youtube from '../../component/yt/YTComp';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Blog from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost';
import { BrowserRouter as Router,Switch,Route,Link, useRouteMatch,useParams } from "react-router-dom";
import actionType from '../../redux/reducer/globalActionType';
import globalProvider from '../../context/Context';


class Home extends Component{
    
    render(){
        return(
            <Router>
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

                    {/*<h3>Blog</h3>
                    <hr/>
                    {
                        this.state.showComp ? <Blog /> : null
                    } */}   
                <div>
                    <p>Component global</p>
                    <ul>
                        <li>
                            <Link to="/">Blog</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/lifecycle">LifeCycle</Link>
                        </li>
                    </ul>
                </div>
                <hr/>
                    <Route path="/" exact component={Blog} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                </Fragment>
            </Router>   
        )
    }
}

export default globalProvider(Home);