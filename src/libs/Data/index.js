import Axios from 'axios'
import Qs from 'qs'

class Data
{
    axios;
    api='http://a1.a/case_history/';
    asset='http://a1.a/';
    suffix=['uoo','jsa'];
    debug=1;

    constructor()
    {
        this.axios = Axios.create({
            baseURL: this.api, //基础url前缀
            headers: {'X-Requested-With': 'XMLHttpRequest','Content-Type': 'application/x-www-form-urlencoded'}, //请求头信息XMLHttpRequest是Ajax异步请求方式，为null则传统同步请求
            timeout: 5000, //设置超时时间
            responseType: 'json', //返回数据类型,默认也是json
            transformRequest: [function (data){
                return Qs.stringify(data) //对json数据转成&字符拼接的形式
            }],
        });
    }

    /*生成路由后缀*/
    getSuffix(type)
    {
        let suffix = '.html';
        switch(type){
            case 'Home':return '';
            case 'Home1':return this.suffix[1]+suffix;
        }
    }

    postStore(data)
    {
        return new Promise((resolve)=>{
            this.axios.post('record',data).then(res=>{
                resolve(res);
            });
            /*this.axios.get('record',{
                params: {
                    type:type,
                }
            }).then(res=>{
                resolve(res['data']);
            });*/
            /*axios.post('http://a1.a/case_history/record', formData).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });*/
        });
    }
    getShow(date)
    {
        return new Promise((resolve)=>{
            this.axios.get('record/'+date).then(res=>{
                resolve(res);
            });
        });
    }
}

let data = new Data();
export default data;
