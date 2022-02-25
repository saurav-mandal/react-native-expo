import axios from 'axios';
import querystring from 'querystring';
//import APIConfig from '../../config/apiConfig';

var setAgent = 'default';
if(process.env.NODE_ENV != 'production'){
    var https    = require('https');
        setAgent = new https.Agent({
        rejectUnauthorized: false,//add when working with https sites
        requestCert: false,//add when working with https sites
        agent: false,//add when working with https sites
    });
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // certificate has expired at TLSSocket
}


// const trackJsError = (error, reqUrl) => {
//     let dataObj = {};
//     dataObj.url = reqUrl;
//     dataObj.stack = error.stack;
//     let excptn = error.name + ' ' + error.message;
//     if (typeof WebView != 'undefined') {
//         excptn = 'WebView - ' + excptn;
//     }

//     if (typeof document !== 'undefined') {
//         excptn = excptn + '; pageURL: ' + document.URL;
//     }

//     dataObj.exception = excptn;
//     dataObj.sourceAction = 'FE_Timeout_Handling';
//     const data  = querystring.stringify(dataObj);
//     postRequest(APIConfig.GET_EXCEPTION_TRACKING_URL, data)
//         .then(res => {})
//         .catch((err) => {});
//   }


const Axios = axios.create();
const APITimeout = (process.env.NODE_ENV == 'production') ? 10000: 50000;
Axios.defaults.timeout = APITimeout;

// Axios.interceptors.response.use(function(response){
//     return response;
// }, function(error) {
//     /* console.log('in error response inceptor axios ', error.config, error.message); */
//     if (!error.config) {
//         return Promise.reject(error);
//     }

//     if(error.config && !error.config.isInterceptRequest){
//         return Promise.reject(error);
//     }

//     error && error.config && trackJsError(error, error.config.url);
//     if (error.isAxiosError && error.code === 'ECONNABORTED' && `timeout of ${APITimeout}ms exceeded` === error.message) {
//         // console.log('TIMEOUT...');
//         const errObj = {code: error.code, message: error.message, status: 408};
//         return Promise.reject(errObj);
//     }

//     return Promise.reject(error);
// });


export function getData(urlPath, type='mobile',postData = {}){
    let axiosConfig = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    };
    if(Object.keys(postData) == 0)
        postData = {};
    postData['deviceType'] = type;
    return Axios.post(urlPath, querystring.stringify(postData), axiosConfig);
};


export function postRequest(urlPath, postData = {}, type='', config={}, extraParams={}){

    var axiosConfig = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        httpsAgent: agent
    };
    const agent = setAgent;

    if(Object.keys(config).length > 0) {
        axiosConfig = {...axiosConfig,...config};
    } else {
        axiosConfig = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            httpsAgent: agent
        };
    }

    typeof extraParams.isInterceptRequest !='undefined' && (axiosConfig.isInterceptRequest = extraParams.isInterceptRequest);

    if(Object.keys(postData) == 0)
            postData = {};
    if(type!=''){
            postData['deviceType'] = type;
            return Axios.post(urlPath, querystring.stringify(postData), axiosConfig);
    }else{
            return Axios.post(urlPath, postData,  axiosConfig);
    }

};
export function postRequestAPIs(urlPath, postData = {}, config = {}, extraParams={}){
    const agent = setAgent;
    const defaultAxiosConfig = {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        httpsAgent: agent,
        withCredentials: true
    };
    const axiosConfig = {...defaultAxiosConfig, ...config};
    typeof extraParams.isInterceptRequest !='undefined' && (axiosConfig.isInterceptRequest = extraParams.isInterceptRequest);
    return Axios.post(urlPath, postData, axiosConfig);
}
export function getRequest(url,config={}, extraParams={}){
    const agent = setAgent;
    const defaultAxiosConfig = {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        httpsAgent: agent,
        withCredentials: true
    };
    const axiosConfig = {...defaultAxiosConfig, ...config};

    typeof extraParams.isInterceptRequest !='undefined' && (axiosConfig.isInterceptRequest = extraParams.isInterceptRequest);
    return Axios.get(url, axiosConfig).then(response => {
        return response;
    })
    .catch(error => {
        /* console.log('in get request catch', error.code, error.status, error.response && error.response.status); */
        // let actionType = '';
        // let errData = '';
        // if (error.response && error.response.status === 500) {
        //     actionType = 'API_RESPONSE_500';
        //     errData = { status: 500 };
        // }

        // if (error.status === 408) {
        //     actionType = 'API_RESPONSE_TIMEOUT';
        //     errData = error;
        // }

        // extraParams.dispatch && extraParams.dispatch({ type: actionType, data: errData });
        //console.log("yes error is occuring")
        throw(error);
    });
};

function getPromiseRequest(url,config={}){
    let axiosConfig;
    const agent = setAgent;

    if(Object.keys(config).length > 0) {
        axiosConfig = config;
    } else {
        axiosConfig = {
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            httpsAgent: agent,
            withCredentials: true
        };
    }

    return Axios.get(url, axiosConfig);
}

export function getMultipleAxiosRequest(){
    let axiosRequestArray = [];
    const config = arguments[arguments.length - 1];
    for(let i=0; i<arguments.length - 1; i++){
        axiosRequestArray.push(getPromiseRequest(arguments[i], config));
    }
   return axios.all(axiosRequestArray)
        .then(axios.spread(function (res1, res2) {
           return {'catPageData' : res1, 'pcwData' : res2};
        }));
}

export function postRequestOnPHPApi(ajaxUrl, queryParamStr, callbackFunc, callBackFuncParam) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', ajaxUrl, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(typeof callbackFunc == 'function'){
                callbackFunc(xhr.responseText, callBackFuncParam);
            }
        }
    };
    xhr.withCredentials = true;
    //xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send(queryParamStr);
}