const devPath = "http://192.168.100.10:6565";//开发环境
const testPath = "http://192.168.100.180:9191";//测试环境

const releaseLn ="http://10.28.71.165:20301/dp-web-server";
const releaseJL ="http://133.193.77.8:9191";
const releaseHLJLT ="http://133.224.217.192:20601/dp-web-server";
const releaseHLJYD ="http://10.149.250.194:9191";
const releaseHB ="http://133.96.131.249:16666/dp-web-server";
const releaseGX ="http://133.0.196.13:9191";
const releaseSX ="http://172.16.60.16:9191";
const releaseNX ="http://135.193.20.139:9191";
const releaseCQ ="http://135.24.198.48:16666/dp-web-server";

export default class Env {
    static getPath(){
        const host = window.location.host.split(":")[0];
        switch(host){
            case "localhost": //本地环境host
                return devPath;
                break;
            case "192.168.100.10": //开发环境host
                return devPath;
                break;
            case "192.168.100.180": //测试环境host
                return testPath;
                break;
            case  "10.28.71.165": //辽宁生产环境host
                return  releaseLn
                break; 
            case  "132.196.36.14": //辽宁生产环境host
                return  releaseLn
                break;  
            case  "133.193.77.8": //吉林生产环境host
                return  releaseJL
                break;
            case  "133.224.217.192": //黑龙江联通生产环境host
                return  releaseHLJLT
                break;
            case  "10.149.250.194": //黑龙江移动生产环境host
                return  releaseHLJYD
                break; 
            case  "133.96.131.249": //河北生产环境host
                return  releaseHB
                break;  
            case  "133.0.196.13": //广西生产环境host
                return  releaseGX
                break;  
            case  "172.16.60.16": //山西生产环境host
                return  releaseSX
                break;  				
            case  "135.193.20.139": //宁夏生产环境host
                return  releaseNX
                break; 
            case  "135.24.198.48": //重庆生产环境host
                return  releaseCQ
                break;
        }
    }
}
