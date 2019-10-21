import React,{Component,Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class Blog extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //         this.setState({
        //             posts:json
        //         })
        //     })

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            // console.log(res.data);
            this.setState({
                posts:res.data
            })
        })
    }

    render(){
        return (
            <Fragment>
                <p className="section-title"> Blog Post</p>
                {
                    this.state.posts.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        )
    }
}

export default Blog;