/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    let barChart = echarts.init(document.getElementById('barChart'));
    let option_barChart = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['利润', '结算额', '采购额']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value'
            }
        ],
        yAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        series: [
            {
                name: '利润',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: [200, 170, 240, 244, 200, 220, 210]
            },
            {
                name: '结算额',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data: [320, 302, 341, 374, 390, 450, 420]
            },
            {
                name: '采购额',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data: [-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    };

    barChart.setOption(option_barChart);

    // for ugly bar
    let ugly_barChart = echarts.init(document.getElementById('uglyBarChart'));

    let option_uglyBarChart = {
        color: ['#98dbaf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['第一周', '第二周', '第三周'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [24358, 31197, 28366]
            }
        ]
    };

    ugly_barChart.setOption(option_uglyBarChart);

    let lineChart = echarts.init(document.getElementById('lineChart'));
    let option_lineChart = {
        title: {
            // text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['食品类', '饮料类', '日用品', '文具类', '其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '食品类',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '饮料类',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '日用品',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '文具类',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '其他',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    lineChart.setOption(option_lineChart);


    let pieChart1 = echarts.init(document.getElementById('pieChart1'));
    let pieChart2 = echarts.init(document.getElementById('pieChart2'));
    let option_pieChart = {
        title: {
            // text: '南丁格尔玫瑰图',
            // subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: ['食品类', '饮料类', '日用品', '文具类', '其他']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        series: [
            {
                name: '半径模式',
                type: 'pie',
                radius: [20, 110],
                center: ['25%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    },
                    show: false
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                legend: {
                    show: false
                },
                data: [
                    {value: 10, name: '食品类'},
                    {value: 5, name: '饮料类'},
                    {value: 15, name: '日用品'},
                    {value: 25, name: '文具类就'},
                    {value: 20, name: '其他'},
                ]
            }
        ]
    };

    pieChart1.setOption(option_pieChart);
    pieChart2.setOption(option_pieChart);

    let gaugeChart1 = echarts.init(document.getElementById('gaugeChart1'));
    let gaugeChart2 = echarts.init(document.getElementById('gaugeChart2'));
    let gaugeChart3 = echarts.init(document.getElementById('gaugeChart3'));
    let option_gaugeChart = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter: '{value}%'},
                data: [{value: 50, name: '完成率'}]
            }
        ]
    };
    gaugeChart1.setOption(option_gaugeChart);
    gaugeChart2.setOption(option_gaugeChart);
    gaugeChart3.setOption(option_gaugeChart);


});
