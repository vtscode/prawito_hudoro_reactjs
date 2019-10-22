import React,{Component,Fragment} from 'react';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import axios from 'axios';

class Blog extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            formBlogPost:{
                userId:1,
                id:1,
                title:'',
                body:''
            },
            isUpdate:false
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:9000/posts?_sort=id&_order=desc&_limit=10')
        .then((result) => {
            // console.log(result.data);
            this.setState({
                posts:result.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:9000/posts/',this.state.formBlogPost).then((result)=> {
            this.getPostAPI();
            this.setState({
                formBlogPost:{
                    userId:1,
                    id:1,
                    title:'',
                    body:''
                },
                isUpdate:false
            })
        },(err) => {
            console.log('error:',err);
        })
    };

    putDataToAPI = (data) => {
        if(data.id !== 'undefined'){
            axios.put(`http://localhost:9000/posts/${data.id}`,data).then((result)=> {
                this.getPostAPI();
                this.setState({
                    formBlogPost:{
                        userId:1,
                        id:1,
                        title:'',
                        body:''
                    },
                    isUpdate:false
                })
            })
        }
    }

    handleRemove = (id) =>{
        if(id !== 'undefined'){
            axios.delete(`http://localhost:9000/posts/${id}`).then((result)=> {
                this.getPostAPI();
            })
        }
    }
    
    handleUpdate = (data) =>{
        this.setState({
            formBlogPost:data,
            isUpdate:true
        })
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    handleFormChange = (event) =>{
        let timestamp = new Date().getTime();
        let formBlogPostNew = {...this.state.formBlogPost};
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost:formBlogPostNew
        },() => {
            // console.log(this.state.formBlogPost);
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI(this.state.formBlogPost);
        }else{
            this.postDataToAPI();
        }
        // console.log(this.state.formBlogPost);
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //         this.setState({
        //             posts:json
        //         })
        //     })

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        
        this.getPostAPI();

    }


    render(){
        return (
            <Fragment>
                <p className="section-title"> Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input value={this.state.formBlogPost.title} type="text" name="title" onChange={this.handleFormChange} placeholder="add title" id="title" autoFocus />

                    <label htmlFor="body">Blog Content</label>  
                    <textarea value={this.state.formBlogPost.body} name="body" id="body" onChange={this.handleFormChange} cols="30" rows="10" placeholder="add body content"></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.posts.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default Blog;