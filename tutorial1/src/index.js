import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Youtube from './component/yt/YTComp';
import Home from './container/Home/Home';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './redux/reducer/globalreducer';


// store
// const storeRedux = createStore(rootReducer);

// folder container itu isi statefull component
// folder component itu isi stateless component

// ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
