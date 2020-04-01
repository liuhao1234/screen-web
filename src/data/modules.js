//大屏基础模板数据
export let screenModule = {
    name:"大屏数据",
    screen:{//大屏背景数据
        width:1920,
        height:1080,
        color:"#303b48",
        backgroundImg:{
            url:'bg.png',
            size:["80%","auto"],
            position:["300","40%"]
        },
        poster:"poster.png"
    },
    modules:[]
}
// 折线图模板数据
export let lineModule = {
    id:"1",
    name:"基础折线图",//组件名称
    type:"line",
    style:{//折线图样式
        width:400,
        height:400,
        x:0, //组件的位置
        y:0,
        background:"transparent",
    },
    data:{
        type:"static",
        url:"",
        data:`[{
    name:"邮件营销",
    data:[{
        name:"周一",
        value:100
    },{
        name:"周二",
        value:150
    },{
        name:"周三",
        value:250
    },{
        name:"周四",
        value:370
    },{
        name:"周五",
        value:150
    }]
}]`
    },
    options:{
        backgroundColor:"transparent",
        title: {
            show:true,
            text: '基础折线图',
            left:"center",
            top:0,
            textStyle:{
                color:"#fff",
                fontSize:28
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            show:true,
            left:"center",
            top:50,
            textStyle:{
                color:"#ffffff",
                fontSize:18
            },
            data:['邮件营销']
        },
        grid: {
            top:100,
            left: 10,
            right: 20,
            bottom: 10,
            containLabel: true
        },
        xAxis : {
            type : 'category',
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                alignWithLabel:true,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisLabel:{
                color:"#fff",
                fontSize:20,
                rotate:0
            },
            splitLine:{
                show:false
            },
            data : ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis : {
            show : true,
            type : 'value',
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisLabel:{
                color:"#fff",
                fontSize:16
            },
            splitLine:{
                show:false
            }
        },
        series : [{
                name:'邮件营销',
                type:'line',
                smooth:false,
                label:{
                    show:false,
                    offset:[0,0],
                    fontSize:14
                },
                data:[120, 132, 101, 134, 90, 230, 210]
        }]
    }
}

// 柱状图模板数据
export let barModule = {
    id:"1",
    name:"基础柱状图",//组件名称
    type:"bar",
    style:{//折线图样式
        width:400,
        height:400,
        x:0, //组件的位置
        y:0,
        background:"transparent",
    },
    data:{
        type:"static",
        url:"",
        data:`[{
    name:"邮件营销",
    data:[{
        name:"周一",
        value:100
    },{
        name:"周二",
        value:150
    },{
        name:"周三",
        value:250
    },{
        name:"周四",
        value:370
    },{
        name:"周五",
        value:150
    }]
}]`
    },
    options:{
        backgroundColor:"transparent",
        title: {
            show:true,
            text: '基础柱图',
            left:"center",
            top:0,
            textStyle:{
                color:"#fff",
                fontSize:28
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            show:true,
            left:"center",
            top:50,
            textStyle:{
                color:"#ffffff",
                fontSize:18
            },
            data:['邮件营销']
        },
        grid: {
            top:100,
            left: 10,
            right: 20,
            bottom: 10,
            containLabel: true
        },
        xAxis : {
            type : 'category',
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                alignWithLabel:true,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisLabel:{
                color:"#fff",
                fontSize:20,
                rotate:0
            },
            splitLine:{
                show:false
            },
            data : ['周一','周二','周三','周四','周五']
        },
        yAxis : {
            show : true,
            type : 'value',
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisLabel:{
                color:"#fff",
                fontSize:16
            },
            splitLine:{
                show:false
            }
        },
        series : [{
                name:'邮件营销',
                type:'bar',
                smooth:false,
                barWidth:10,
                label:{
                    show:false,
                    position:"top",
                    offset:[0,0],
                    fontSize:14
                },
                data:[120, 132, 101, 134, 90]
        }]
    }
}

// 饼图模板数据
export let pieModule = {
    id:"1",
    name:"基础饼图",//组件名称
    type:"pie",
    style:{//折线图样式
        width:400,
        height:400,
        x:0, //组件的位置
        y:0,
        background:"transparent",
    },
    data:{
        type:"static",
        url:"",
        data:`[{
    name:"直接访问",
    value:100
},{
    name:"邮件营销",
    value:150
},{
    name:"联盟广告",
    value:250
},{
    name:"视频广告",
    value:370
},{
    name:"搜索引擎",
    value:150
}]`
    },
    options:{
        backgroundColor:"transparent",
        title: {
            show:true,
            text: '基础饼图',
            left:"center",
            top:0,
            textStyle:{
                color:"#fff",
                fontSize:28
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            show:false,
            left:"center",
            top:50,
            textStyle:{
                color:"#ffffff",
                fontSize:18
            },
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : {
            name: '基础饼图',
            type: 'pie',
            roseType:false,
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
            itemStyle:{
                borderWidth:0,
                borderColor:"#333",
                borderType:"solid"
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    }
}

// 地图模板数据
export let mapModule = {
    id:"1",
    name:"基础地图",//组件名称
    type:"map",
    style:{//折线图样式
        width:400,
        height:400,
        x:0, //组件的位置
        y:0,
        background:"transparent",
    },
    data:{
        type:"static",
        url:"",
        data:``
    },
    options:{
        backgroundColor:"transparent",
        title: {
            show:false,
            text: '基础地图',
            left:"center",
            top:0,
            textStyle:{
                color:"#fff",
                fontSize:28
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            show:true,
            left:"center",
            top:50,
            textStyle:{
                color:"#ffffff",
                fontSize:18
            },
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        geo:{
            map: 'china',
            roam:true,
            label: {
                normal: {
                    show: false,
                    fontSize: "14",
                    color: "rgba(0,0,0,0.7)"
                },
                emphasis:{
                    show:false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: "#4db1fa",
                    borderWidth:2,
                    borderColor: "rgba(0, 0, 0, 0.2)"
                },
                emphasis: {
                    areaColor: "#4db1fa"
                }
            }
        },
        series : {
            name: '系列一',
            type: 'map',
            data:[{
                name: "南海诸岛",
                value: 0
            },
            {
                name: '北京',
                value: 54
            },
            {
                name: '天津',
                value: 13
            },
            {
                name: '上海',
                value: 40
            },
            {
                name: '重庆',
                value: 75
            },
            {
                name: '河北',
                value: 13
            },
            {
                name: '河南',
                value: 83
            },
            {
                name: '云南',
                value: 11
            },
            {
                name: '辽宁',
                value: 19
            },
            {
                name: '黑龙江',
                value: 15
            },
            {
                name: '湖南',
                value: 69
            },
            {
                name: '安徽',
                value: 60
            },
            {
                name: '山东',
                value: 39
            },
            {
                name: '新疆',
                value: 4
            },
            {
                name: '江苏',
                value: 31
            },
            {
                name: '浙江',
                value: 104
            },
            {
                name: '江西',
                value: 36
            },
            {
                name: '湖北',
                value: 1052
            },
            {
                name: '广西',
                value: 33
            },
            {
                name: '甘肃',
                value: 7
            },
            {
                name: '山西',
                value: 9
            },
            {
                name: '内蒙古',
                value: 7
            },
            {
                name: '陕西',
                value: 22
            },
            {
                name: '吉林',
                value: 4
            },
            {
                name: '福建',
                value: 18
            },
            {
                name: '贵州',
                value: 5
            },
            {
                name: '广东',
                value: 98
            },
            {
                name: '青海',
                value: 1
            },
            {
                name: '西藏',
                value: 0
            },
            {
                name: '四川',
                value: 44
            },
            {
                name: '宁夏',
                value: 4
            },
            {
                name: '海南',
                value: 22
            },
            {
                name: '台湾',
                value: 3
            },
            {
                name: '香港',
                value: 5
            },
            {
                name: '澳门',
                value: 5
            }]
        }
    }
}

// 文本组件数据模板
export let textModule = {
    id:"1",
    name:"文本组件",//组件名称
    type:"text",
    style:{
        x:0,
        y:0
    },
    data:{
        type:"static",
        url:"",
        data:"文本组件"
    },
    options:{
        text:"文本组件",
        style:{
            color:"#f3927f",
            fontSize:14
        }
    }
}

// 四边形模板数据
export let blockModule = {
    id:"1",
    name:"四边形组件",//组件名称
    type:"block",
    style:{//折线图样式
        width:100,
        height:50,
        x:0, //组件的位置
        y:0,
        background:"#f3927f",
        border:{
            show:true,
            width:1,
            color:"#f00",
            radius:0
        }
    }
}
export let borderModule = {
    id:"1",
    name:"边框组件",//组件名称
    type:"border",
    style:{//折线图样式
        width:300,
        height:300,
        x:0, //组件的位置
        y:0,
        borderType:0,
    }
}

export let titleBorderModule = {
    id:"1",
    name:"标题边框",//组件名称
    type:"titleBorder",
    style:{//折线图样式
        width:840,
        height:260,
        x:0, //组件的位置
        y:0,
        borderType:0
    }
}

