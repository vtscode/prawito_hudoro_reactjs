import axios from 'axios';
import { onlinePath,basePath } from './Config';

const putFunc = (pathNew,rootPath,data) => {
    const promise = new Promise((resolve,reject) => {
        axios.put(`${rootPath ? onlinePath : basePath}/${pathNew}`,data).then((result)=> {
            resolve(result);
        },(err) => {
            reject(err);
        })
    })

    return promise;
}

export default putFunc;
