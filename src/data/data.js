// 大屏数据模型（初稿）
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