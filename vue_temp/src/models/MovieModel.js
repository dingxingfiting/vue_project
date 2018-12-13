import {HTTP} from "./HTTP";
class MovieModel extends HTTP{
    getTop250(){
        return this .request({
            url:"top250"
        })
    }
    /* 获取详情页面数据 */
    getDetail(id){
        return this.request({
            url:"subject/"+id
        })
    }

}
export{MovieModel}