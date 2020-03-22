/*global $grasp_mobile_progress_circle, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // Main Template Color
    let brandPrimary = '#33b35a';


    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    let LINECHART = echarts.init(document.getElementById('line-chart'));
    let LINECHART_option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['成本', '利润']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
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
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '成本',
                type: 'line',
                smooth: true,
                // stack: '总量',
                color: '#809f80',
                areaStyle: {},
                data: [214.2, 230.7, 290.2, 197.3, 257.0, 190.3, 233.3]
            },
            {
                name: '利润',
                type: 'line',
                // stack: '总量',
                smooth: true,
                color: '#529f95',
                areaStyle: {},
                data: [220.48, 247.9, 309.5, 204.8, 264.1, 194.1, 236.6]
            },
        ]
    };
    LINECHART.setOption(LINECHART_option);

    // var myLineChart = new Chart(LINECHART, {
    //     type: 'line',
    //     options: {
    //         legend: {
    //             display: false
    //         }
    //     },
    //     data: {
    //         labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    //         datasets: [
    //             {
    //                 label: "My First dataset",
    //                 fill: true,
    //                 lineTension: 0.3,
    //                 backgroundColor: "rgba(77, 193, 75, 0.4)",
    //                 borderColor: brandPrimary,
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 borderWidth: 1,
    //                 pointBorderColor: brandPrimary,
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: brandPrimary,
    //                 pointHoverBorderColor: "rgba(220,220,220,1)",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 0,
    //                 data: [50, 20, 60, 31, 52, 22, 40],
    //                 spanGaps: false
    //             },
    //             {
    //                 label: "My First dataset",
    //                 fill: true,
    //                 lineTension: 0.3,
    //                 backgroundColor: "rgba(75,192,192,0.4)",
    //                 borderColor: "rgba(75,192,192,1)",
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 borderWidth: 1,
    //                 pointBorderColor: "rgba(75,192,192,1)",
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //                 pointHoverBorderColor: "rgba(220,220,220,1)",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //                 data: [65, 59, 30, 81, 46, 55, 30],
    //                 spanGaps: false
    //             }
    //         ]
    //     }
    // });


    // var pieChart = echarts.init(document.getElementsByClassName('pie-chart'));
    let pieChart1 = echarts.init(document.getElementById('pieChart'));
    let pieChart2 = echarts.init(document.getElementById('pieChart2'));
    let pieChart3 = echarts.init(document.getElementById('pieChart3'));
    let pieChart4 = echarts.init(document.getElementById('pieChart4'));
    let option1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['饮料', '零食', '水果', '日用品', '其他']
        },
        series: [
            {
                name: '利润来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '饮料'},
                    {value: 600, name: '零食'},
                    {value: 135, name: '日用品'}
                ]
            }
        ]
    };

    let option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['饮料', '零食', '水果', '日用品', '其他']
        },
        series: [
            {
                name: '利润来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 634, name: '饮料'},
                    {value: 310, name: '零食'}
                ]
            }
        ]
    };

    let option3 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['饮料', '零食', '水果', '日用品', '其他']
        },
        series: [
            {
                name: '利润来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '饮料'},
                    {value: 310, name: '零食'},
                    {value: 135, name: '日用品'},
                    {value: 100, name: '其他'}
                ]
            }
        ]
    };

    let option4 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['饮料', '零食', '日用品', '水果', '其他']
        },
        series: [
            {
                name: '利润来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '饮料'},
                    {value: 310, name: '零食'},
                    {value: 234, name: '水果'},
                    {value: 1153, name: '日用品'},
                    {value: 156, name: '其他'}
                ]
            }
        ]
    };

    pieChart1.setOption(option1);
    pieChart2.setOption(option2);
    pieChart3.setOption(option3);
    pieChart4.setOption(option4);
});
