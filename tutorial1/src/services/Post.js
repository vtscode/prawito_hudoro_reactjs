import axios from 'axios';
import { onlinePath,basePath } from './Config';

const postFunc = (pathNew,rootPath,data) => {
    const promise = new Promise((resolve,reject) => {
        axios.post(`${rootPath ? onlinePath : basePath}/${pathNew}`,data).then((result)=> {
            resolve(result);
        },(err) => {
            reject(err);
        })
    })

    return promise;
}

export default postFunc;
