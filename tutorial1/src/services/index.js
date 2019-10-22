// import React,{Component} from 'react';
import axios from 'axios';

axios.get('http://localhost:9000/posts?_sort=id&_order=desc&_limit=10')
    .then((result) => {
        // console.log(result.data);
        this.setState({
            posts:result.data
        })
    })