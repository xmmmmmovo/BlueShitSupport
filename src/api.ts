import axios from 'axios'
import {config} from "./app";

/**网络请求 */
export const remote_get = function (url: string) {
    const promise = new Promise(function (resolve, reject) {
        axios.get(
            url,
            {
                headers: {
                    'Cookie': config['Cookie'],
                    'User-Agent': config['User-Agent']
                }
            }
        ).then((res: any) => {
            resolve(res.data);
        }, (err: any) => {
            reject(err);
        });
    });
    return promise;
}

export const remote_post = function (url: string, data: any) {
    const promise = new Promise(
        function (resolve, reject) {
            axios.post(
                url,
                data,
                {
                    headers: {
                        'Cookie': config['Cookie'],
                        'User-Agent': config['User-Agent']
                    },
                }
            ).then((res: any) => {
                resolve(res.data);
            }, (err: any) => {
                reject(err);
            });
        }
    )
    return promise
}
