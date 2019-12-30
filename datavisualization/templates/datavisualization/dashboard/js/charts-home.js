/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // Main Template Color
    var brandPrimary = '#33b35a';


    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var LINECHART = $('#lineChart');
    var myLineChart = new Chart(LINECHART, {
        type: 'line',
        options: {
            legend: {
                display: false
            }
        },
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(77, 193, 75, 0.4)",
                    borderColor: brandPrimary,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [50, 20, 60, 31, 52, 22, 40],
                    spanGaps: false
                },
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 30, 81, 46, 55, 30],
                    spanGaps: false
                }
            ]
        }
    });


    // ------------------------------------------------------- //
    // Pie Chart
    // ------------------------------------------------------ //
    // var PIECHART = $('#pieChart');
    // var myPieChart = new Chart(PIECHART, {
    //     type: 'doughnut',
    //     data: {
    //         labels: [
    //             "First",
    //             "Second",
    //             "Third"
    //         ],
    //         datasets: [
    //             {
    //                 data: [300, 50, 100],
    //                 borderWidth: [1, 1, 1],
    //                 backgroundColor: [
    //                     brandPrimary,
    //                     "rgba(75,192,192,1)",
    //                     "#FFCE56"
    //                 ],
    //                 hoverBackgroundColor: [
    //                     brandPrimary,
    //                     "rgba(75,192,192,1)",
    //                     "#FFCE56"
    //                 ]
    //             }]
    //     }
    // });

    // ------------------------------------------------------- //
    // echarts
    // Gauge Chart
    // ------------------------------------------------------ //
    // var gaugeChart = echarts.init(document.getElementById('gaugeChart'));
    // gaugeChart.setOption({
    //     series: [
    //         {
    //             name: '访问来源',
    //             type: 'pie',
    //             radius: '55%',
    //             data: [
    //                 {value: 235, name: '视频广告'},
    //                 {value: 274, name: '联盟广告'},
    //                 {value: 310, name: '邮件营销'},
    //                 {value: 335, name: '直接访问'},
    //                 {value: 400, name: '搜索引擎'}
    //             ]
    //         }
    //     ]
    // });var gaugeChart = echarts.init(document.getElementById('gaugeChart'));
    // gaugeChart.setOption({
    //     series: [
    //         {
    //             name: '访问来源',
    //             type: 'pie',
    //             radius: '55%',
    //             data: [
    //                 {value: 235, name: '视频广告'},
    //                 {value: 274, name: '联盟广告'},
    //                 {value: 310, name: '邮件营销'},
    //                 {value: 335, name: '直接访问'},
    //                 {value: 400, name: '搜索引擎'}
    //             ]
    //         }
    //     ]
    // });

    // var pieChart = echarts.init(document.getElementsByClassName('pie-chart'));
    let pieChart = echarts.init(document.getElementById('pieChart'));
    let pieChart2 = echarts.init(document.getElementById('pieChart2'));
    let pieChart3 = echarts.init(document.getElementById('pieChart3'));
    let pieChart4 = echarts.init(document.getElementById('pieChart4'));
    let option = {
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
                    {value: 234, name: '水果'},
                    {value: 135, name: '日用品'},
                    {value: 1548, name: '其他'}
                ]
            }
        ]
    };
    pieChart.setOption(option);
    pieChart2.setOption(option);
    pieChart3.setOption(option);
    pieChart4.setOption(option);



});
