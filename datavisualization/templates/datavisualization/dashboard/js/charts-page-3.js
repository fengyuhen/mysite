/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    let barChart = echarts.init(document.getElementById('barChart'));
    let option_barChart = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['上月', '本月']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['日用品', '其他', '饮料', '水果', '零食']
        },
        series: [
            {
                name: '上月',
                type: 'bar',
                data: [1800, 2340, 3700, 1740, 6300]
            },
            {
                name: '本月',
                type: 'bar',
                data: [1950, 3030, 3540, 1410, 6070]
            }
        ]
    };

    barChart.setOption(option_barChart);

    let dottedBar = echarts.init(document.getElementById('dottedBar'));
    let option_dottedBar = {
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    dottedBar.setOption(option_dottedBar);


    let spBarChart = echarts.init(document.getElementById('spBarChart'));
    let data = [
        [[204, 10, 10000, 'Australia', '女'], [311, 30, 2766, 'Canada', '女'], [1516, 17, 1154605773, 'China', '女'], [13670, 30, 10582082, 'Cuba', '女'], [28599, 25, 4986705, 'Finland', '女'], [29476, 45, 56943299, 'France', '女'], [31476, 35, 78958237, 'Germany', '女'], [28666,25, 254830, 'Iceland', '女'], [1777, 27, 870601776, 'India', '女'], [29550, 19, 122249285, 'Japan', '女'], [2076, 20, 20194354, 'North Korea', '女'], [12087, 22, 42972254, 'South Korea', '女'], [24021, 35, 3397534, 'New Zealand', '女'], [43296, 28, 4240375, 'Norway', '女'], [10088, 24, 38195258, 'Poland', '女'], [19349, 29, 147568552, 'Russia', '女'], [10670, 19, 53994605, 'Turkey', '女'], [26424, 42, 57110117, 'United Kingdom', '女'], [37062, 44, 252847810, 'United States', '女']],
        [[44056, 15, 23968973, 'Australia', '男'], [43294, 30, 35939927, 'Canada', '男'], [13334, 25, 1376048943, 'China', '男'], [21291, 29, 11389562, 'Cuba', '男'], [38923, 47, 5503457, 'Finland', '男'], [37599, 24, 64395345, 'France', '男'], [44053, 40, 80688545, 'Germany', '男'], [42182, 15, 329425, 'Iceland', '男'], [5903, 18, 1311050527, 'India', '男'], [36162, 28, 126573481, 'Japan', '男'], [1390, 44, 25155317, 'North Korea', '男'], [34644, 37, 50293439, 'South Korea', '男'], [34186, 36, 4528526, 'New Zealand', '男'], [64304, 26, 5210967, 'Norway', '男'], [24787, 31, 38611794, 'Poland', '男'], [23038, 37, 143456918, 'Russia', '男'], [19360, 15, 78665830, 'Turkey', '男'], [38225, 38, 64715810, 'United Kingdom', '男'], [53354, 27, 321773631, 'United States', '男']]
    ];

    let option_spBarChart = {

        legend: {
            right: 10,
            data: ['女', '男']
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series: [{
            name: '女',
            data: data[0],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }, {
            name: '男',
            data: data[1],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }]
    };
    spBarChart.setOption(option_spBarChart);

    //radar chart
    let radarChart1 = echarts.init(document.getElementById('radarChart1'));
    let radarChart2 = echarts.init(document.getElementById('radarChart2'));
    let radarChart3 = echarts.init(document.getElementById('radarChart3'));
    let option_radarChart1 = {
        xAxis: {
            type: 'category',
            data: ['<=18', '18-25', '25-32', '33-40', '40-47', '47-54', '>=55']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [220, 390, 200,280, 270, 210, 173],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            }
        }]
    };
    let option_radarChart2 = {
        xAxis: {
            type: 'category',
            data: ['男', '女','未知','大盘人均']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [320,280,276,298],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            }
        }]
    };
    let option_radarChart3 = {
        xAxis: {
            type: 'category',
            data: ['<=1日', '1-30', '30-90', '90-150', '150-365', '>=365日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [40, 110, 150, 80, 220, 0],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            }
        }]
    };

    radarChart1.setOption(option_radarChart1);
    radarChart2.setOption(option_radarChart2);
    radarChart3.setOption(option_radarChart3);
});
