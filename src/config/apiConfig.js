let TEST_API_DOMAIN = 'apis.shikshatest.infoedge.com';
//let DEV_API_DOMAIN = 'http://172.16.3.108:9014';
//import config from './config';

// Use either default export or name export
// instead of module.exports
// as from now cannot mix- import and module.exports

const PROTOCOL = 'https://';

let API_DOMAIN = '';
if(process.env.NODE_ENV != 'production')  {
	API_DOMAIN =   TEST_API_DOMAIN;
} else { 
	if(typeof window != "undefined" && window.location.hostname.indexOf('testpwa.') != -1) {
		API_DOMAIN = "testapi.shiksha.com";
	} else {
		API_DOMAIN =  'apis.shiksha.com';
	}
}
// const API_DOMAIN = (process.env.NODE_ENV != 'production') ? TEST_API_DOMAIN : 'apis.shiksha.com';
const API_SERVER_DOMAIN = (process.env.NODE_ENV != 'production') ? 'https://' + TEST_API_DOMAIN : 'http://apis.shiksha.jsb9.net';

const getDomain = () => typeof window != 'undefined' ? PROTOCOL + API_DOMAIN : API_SERVER_DOMAIN;
export const GET_EXAMPAGE_FROM_SERVER = getDomain() + '/apigateway/examapi/v3/info/getExamPage';
export const GET_EXAMPAGE = getDomain() + '/apigateway/examapi/v3/info/getExamPage';
