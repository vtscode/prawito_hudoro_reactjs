import axios from 'axios';
import { onlinePath,basePath } from './Config';

const delFunc = (pathNew,rootPath) => {
    const promise = new Promise((resolve,reject) => {
        axios.delete(`${rootPath ? onlinePath : basePath}/${pathNew}`)
        .then((result) => {
            resolve(result.data);
        }, err => { 
            reject(err);
        })
    })
    return promise;
} 

export default delFunc;