import axios from "axios-jsonp-pro"
// 如果需要跨越使用 import axios from 'axios-jsonp-pro'
var baseURL = 'https://douban.uieee.com/v2/movie/';
class HTTP {
    request({
        url, method = "jsonp",data = {},params = {}
    }) {
        return axios({
            method,
            url:baseURL+url,
            data,
            params
        });
    }
}
export {
    HTTP
}