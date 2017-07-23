import React, { Component } from 'react';

//导入echarts
var echarts = require('echarts');
require("echarts/map/js/china.js");

class MapChart extends React.Component {

    constructor(props) {
        super(props)
        this.setPieOption = this.setPieOption.bind(this)
        this.initPie = this.initPie.bind(this)
    }

    initPie() {
        console.log("initPie")
        const { data } = this.props //外部传入的data数据
        if (this.refs.chart) {
            let myChart = echarts.init(this.refs.chart) //初始化echarts

            console.log(data)
            //我们要定义一个setPieOption函数将data传入option里面
            let options = this.setPieOption(data)
            //设置options
            myChart.setOption(options)
        }
    }

    componentDidMount() {
        this.initPie()
    }

    componentDidUpdate() {
        this.initPie()
    }

    render() {
        return (
            <div className="pie-react">
                <div ref="chart" style={{ width: "100%", height: "500px" }}></div>
            </div>
        )
    }

    //一个基本的echarts图表配置函数
    setPieOption(data) {
        function randomData() {
            return Math.round(Math.random() * 1000);
        }

        var option = {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['iphone3', 'iphone4', 'iphone5']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '重庆', value: randomData() },
                        { name: '河北', value: randomData() },
                        { name: '河南', value: randomData() },
                        { name: '云南', value: randomData() },
                        { name: '辽宁', value: randomData() },
                        { name: '黑龙江', value: randomData() },
                        { name: '湖南', value: randomData() },
                        { name: '安徽', value: randomData() },
                        { name: '山东', value: randomData() },
                        { name: '新疆', value: randomData() },
                        { name: '江苏', value: randomData() },
                        { name: '浙江', value: randomData() },
                        { name: '江西', value: randomData() },
                        { name: '湖北', value: randomData() },
                        { name: '广西', value: randomData() },
                        { name: '甘肃', value: randomData() },
                        { name: '山西', value: randomData() },
                        { name: '内蒙古', value: randomData() },
                        { name: '陕西', value: randomData() },
                        { name: '吉林', value: randomData() },
                        { name: '福建', value: randomData() },
                        { name: '贵州', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '青海', value: randomData() },
                        { name: '西藏', value: randomData() },
                        { name: '四川', value: randomData() },
                        { name: '宁夏', value: randomData() },
                        { name: '海南', value: randomData() },
                        { name: '台湾', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '重庆', value: randomData() },
                        { name: '河北', value: randomData() },
                        { name: '安徽', value: randomData() },
                        { name: '新疆', value: randomData() },
                        { name: '浙江', value: randomData() },
                        { name: '江西', value: randomData() },
                        { name: '山西', value: randomData() },
                        { name: '内蒙古', value: randomData() },
                        { name: '吉林', value: randomData() },
                        { name: '福建', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '西藏', value: randomData() },
                        { name: '四川', value: randomData() },
                        { name: '宁夏', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '台湾', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                }
            ]
        };
        return option;
    }
}

export default MapChart