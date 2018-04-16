let baseApiIp = process.env.NODE_ENV === 'development' ? 'http://172.168.175.90' : 'http://120.77.85.12'
let baseReportIp = process.env.NODE_ENV === 'development' ? 'http://172.168.171.204' : 'http://120.77.85.12'
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

if (localStorage.getItem('apiIp')) {
    baseApiIp = localStorage.getItem('apiIp')
    baseReportIp = localStorage.getItem('apiIp')
}

// 后台接口
export const lrmApiRoot = `${baseApiIp}:9095/api/lrm/v1`

// 页数配置
export const customPageSizes = [1, 5, 10, 15]

// 报表URL
export const reportURL = `${baseReportIp}:8080/WebReport/ReportServer?&op=view&__bypagesize__=false&reportlet=`
