import postFunc from './Post'; 
import putFunc from './Put'; 
import getFunc from './Get'; 
import delFunc from './Delete'; 

// GET
const getNewBlog = () => getFunc('posts?_sort=id&_order=desc&_limit=10',false);
const getComments = () => getFunc('comments?_sort=id&_order=desc&_limit=10',true);

// POST
const postNewBlog = (data) => postFunc('posts',false,data);

// PUT
const updateNewBlog = (data,id) => putFunc(`posts/${id}`,false,data);

// DELETE
const deleteNewBlog = (id) => delFunc(`posts/${id}`,false);

const API = {
    getNewBlog,
    getComments,
    postNewBlog,
    updateNewBlog,
    deleteNewBlog
}

export default API;