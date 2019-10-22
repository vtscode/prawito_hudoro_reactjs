import React,{Component,Fragment} from 'react';
import axios from 'axios';

class DetailPost extends Component{

    constructor(props) {
        super(props);
        this.state = {
            post: {
                title : '',
                body : ''
            }
        }
    }
    

    componentDidMount() {
        let id = this.props.match.params.postID;
        axios.get(`http://localhost:9000/posts/${id}`).then((result)=> {
            this.setState({
                post:{
                    title:result.data.title,
                    body:result.data.body
                }
            })
        })
    }

    render(){
        // ada yg dipassing di props ini
        // console.log(this.props);
        // console.log(this.props.match.params.postID);
        return(
            <Fragment>
                <p>Title: {this.state.post.title}</p>
                <p>Desc: {this.state.post.body}</p>
            </Fragment>
        );
    }
}

export default DetailPost;