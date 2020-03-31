/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // for ugly bar
    let ugly_barChart = echarts.init(document.getElementById('uglyBarChart'));

    var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
    var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    var yMax = 500;
    var dataShadow = [];

    for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }

    let option_uglyBarChart = {
        color: ['#3398DB'],
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
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                name: '退货金额',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 62, 59, 390, 330, 220]
            }
        ]
    };

    ugly_barChart.setOption(option_uglyBarChart);
    // Enable data zoom when user click bar.
    var zoomSize = 6;
    ugly_barChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });

    let lineChart = echarts.init(document.getElementById('lineChart'));
    let option_lineChart = {
        title: {
            // text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['其他', '饮料类', '日用品', '食品类']
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
            // boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '其他',
                type: 'line',
                stack: '总量',
                data: [0, 0, 0, 0, 20, 13, 15]
            },
            {
                name: '日用品',
                type: 'line',
                stack: '总量',
                data: [0, 0, 0, 0, 30, 17, 10]
            },
            {
                name: '饮料类',
                type: 'line',
                stack: '总量',
                data: [0, 10, 0, 0, 130, 100, 45]
            },
            {
                name: '食品类',
                type: 'line',
                stack: '总量',
                data: [0, 40, 35, 50, 175, 200, 150]
            }
        ]
    };

    lineChart.setOption(option_lineChart);


    let pieChart1 = echarts.init(document.getElementById('pieChart1'));
    let pieChart2 = echarts.init(document.getElementById('pieChart2'));
    let option_pieChart1 = {
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
            data: ['食品类', '饮料类', '日用品', '其他']
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
                labelLine: {
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
                    {value: 3, name: '食品类'},
                    {value: 2, name: '饮料类'},
                    {value: 5, name: '日用品'},
                    {value: 6, name: '其他'},
                ]
            }
        ]
    };

    let option_pieChart2 = {
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
            data: ['食品类', '饮料类', '日用品', '其他']
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
                labelLine: {
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
                    {value: 10, name: '饮料类'},
                    {value: 5, name: '日用品'},
                    {value: 2, name: '其他'},
                ]
            }
        ]
    };

    pieChart1.setOption(option_pieChart1);
    pieChart2.setOption(option_pieChart2);

});
