// 大屏数据模型（初稿）
const data = {
    id:111,
    name:"大屏数据",
    screen:{//大屏背景数据
        width:1920,
        height:1080,
        color:"rgba(0,0,0,1)",
        backgroundImg:{
            url:'bg.png',
            size:["80%","auto"],
            position:["300","40%"]
        },
        poster:"poster.png"
    },
    modules:[
        {
        name:"基础折线图",//组件名称
        type:"line",
        style:{//折线图样式
            width:400,
            height:500,
            background:"rgba(0,0,0,1)",
            x:100, //组件的位置
            y:100,
            smooth:false,
            title:{
                show:true,
                name:"地市收入", //chart名
                fontSize:20,
                color:"rgba(0,0,0,1)",
                margin:20
            },
            lengend:{//
                position:"center",//left,center,right
                margin:10,
            },
            grid:{//折线区域
                margin:[10,10,10,10] //距离轴线的间距，按上右下左的顺序配置
            },
            splitLine:{//折线区域分割线
                show:false,
                color:"",
                width:1,
                opacity:1,
                type:["solid","dashed","dotted"]
            },
            splitArea:{//
                show:false,
                color:"",
                opacity:1
            },
            xAxis:{
                show:false,
                axisLine:{//x轴的相关配置
                    color:"",
                    width:""
                },
                axisTick:{
                    color:"",
                    width:""
                },
                axisLabel:{
                    fontSize:14,
                    color:"",
                    rotate:0,
                }
            },
            yAxis:{
                show:false,
                axisLine:{//x轴的相关配置
                    color:"",
                    width:""
                },
                axisTick:{
                    color:"",
                    width:""
                },
                axisLabel:{
                    fontSize:14,
                    color:"",
                    rotate:0,
                }
            }
        },
        series:[{
            lineStyle:{
                color:"",
                width:""
            },
            label:{//折线文字
                show:false,
                fontSize:14,
                color:""
            },
            itemStyle:{//折线拐点图标
                symbol:["emptyCircle","circle","rect","none"],
                symbolSize:4
            }
        }],
        data:[{
            name:"沈阳",
            value:111
        },{
            name:"大连",
            value:222
        }]
    },{
        
    }
    ]
}

export let testScreenData = {
    id:1,
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
    modules:[{
        id:"1",
        name:"基础折线图",//组件名称
        type:"line",
        style:{//折线图样式
            width:400,
            height:500,
            x:100, //组件的位置
            y:100,
            background:"transparent",
        },
        data:{
            type:"static",
            url:"192.168.0.100",
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
            },{
                name:"电话营销",
                data:[{
                    name:"周一",
                    value:500
                },{
                    name:"周二",
                    value:250
                },{
                    name:"周三",
                    value:150
                },{
                    name:"周四",
                    value:270
                },{
                    name:"周五",
                    value:350
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
                data:['邮件营销','电话营销']
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
                boundaryGap : false,

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
            },{
                name:'电话营销',
                type:'line',
                smooth:false,
                label:{
                    show:false,
                    offset:[0,0],
                    fontSize:14
                },
                data:[20, 32, 1, 34, 190, 30, 10]
            }]
        }
    },{
        id:"2",
        name:"折线图",//组件名称
        type:"line",
        style:{//折线图样式
            width:400,
            height:500,
            x:500, //组件的位置
            y:100,
            background:"transparent",
        },
        data:{
            type:"static",
            url:"192.168.0.100",
            data:`[{
                name:"电话营销",
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
                text: '折线图',
                left:"center",
                top:0,
                textStyle:{
                    color:"#ffffff",
                    fontSize:28
                }
            },
            tooltip : {
                trigger: 'item'
            },
            legend: {
                show:true,
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
                boundaryGap : false,
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
    }]
}