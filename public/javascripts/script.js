/**********************************************************************************************************************************
 * 时间选择器                                                                                                                     *
 *                                                                                                                                * 
 *                                                                                                                                *
 **********************************************************************************************************************************
 */

    $('#datepicker').datepicker({
    	changeMonth: true,
    	changeYear: true,
        dateFormat:'yymmdd',
        onClose:function (dateText,inst){
           var date = $(this).datepicker("getDate");
        
            $.post('/home',{'dateToday':date});
        
         }}
        );

    $(document).ready(function(){
        chooseChwindcode(this);
    })
    
     function chooseChwindcode(obj){
         var val=$(obj).find("option:selected").val();

         //$.post('/home',{'chWindCode':val});
         $.ajax({
                url: "http://localhost:3000/home",
                type: "POST",
                data: {chWindCode:val},
                dataType:'json',
                async: false,
                beforeSend: function() {},
                success: function(msg) {},
                error: function(msg) {}
            });

     }

    setTimeout(function (){

    },5000);
/***********************************************************************************************************************************
 *  图表                                                                                                                           *
 *                                                                                                                                 *
 *                                                                                                                                 *
 *                                                                                                                                 *
 ***********************************************************************************************************************************
 */


//surplusDeficit页面中的饼图
        $(document).ready(function () {
        Highcharts.setOptions({
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
        });

        $('#pie').highcharts({
        chart: {
        type: 'pie'
        },

        series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
        });
        });


//homepage中折线图
   $(document).ready(function(){
    var chart; 
   $(function() { 
       chart = new Highcharts.Chart({ 
        chart: { 
            renderTo: 'chart_spline', //图表放置的容器，DIV 
            defaultSeriesType: 'spline', //图表类型为曲线图 
            events: { 
                load: function() {  
                    var series = this.series[0]; 
                    //每隔5秒钟，图表更新一次，y数据值在0-100之间的随机数 
                    setInterval(function() { 
                        var x = (new Date()).getTime(), // 当前时间 
                        y = Math.random()*100;  
                        series.addPoint([x, y], true, true); 
                    }, 
                    5000); 
                } 
            } 
        }, 
        title: { 
            text: '沪深300期货套利'  //图表标题 
        }, 
        xAxis: { //设置X轴 
            type: 'datetime',  //X轴为日期时间类型 
            tickPixelInterval: 150  //X轴标签间隔 
        }, 
        yAxis: { //设置Y轴 
            title: '', 
            max: 100, //Y轴最大值 
            min: 0  //Y轴最小值 
        }, 
        tooltip: {//当鼠标悬置数据点时的提示框 
            formatter: function() { //格式化提示信息 
                return 'CPU使用率'+ 
                Highcharts.dateFormat('%H:%M:%S', this.x) +''+  
                Highcharts.numberFormat(this.y, 2)+'%'; 
            } 
        }, 
        legend: { 
            enabled: false  //设置图例不可见 
        }, 
        exporting: { 
            enabled: false  //设置导出按钮不可用 
        }, 
        credits: { 
            
        }, 
        series: [{ 
            data: (function() { //设置默认数据， 
                var data = [], 
                time = (new Date()).getTime(), 
                i; 
 
                for (i = -19; i <= 0; i++) { 
                    data.push({ 
                        x: time + i * 5000,  
                        y: Math.random()*100 
                    }); 
                } 
                return data; 
            })() 
        }] 
    }); 
}); 
   });


//surplusDeficit界面中tab页面的两个折线图
     $(document).ready(function(){
        var chart1= $('#TmLine').highcharts({
          chart: { 
            defaultSeriesType: 'spline', //图表类型line(折线图), 
            zoomType: 'x'   //x轴方向可以缩放 
        }, 
        credits: { 
            enabled: false   //右下角不显示LOGO 
        }, 
        title: { 
            text: '最近三个月走势' //图表标题 
        }, 
       
        xAxis: {  //x轴 
            categories: [ '8月', '9月', '10月'], //x轴标签名称 
            gridLineWidth: 1, //设置网格宽度为1 
            lineWidth: 2,  //基线宽度 
            labels:{y:26}  //x轴标签位置：距X轴下方26像素 
        }, 
        yAxis: {  //y轴 
            title: {text: '(%)'}, //标题 
            lineWidth: 2 //基线宽度 
        }, 
        plotOptions:{ //设置数据点 
            line:{ 
                dataLabels:{ 
                    enabled:true  //在数据点上显示对应的数据值 
                }, 
                enableMouseTracking: false //取消鼠标滑向触发提示框 
            } 
        }, 
        legend: {  //图例 
            layout: 'horizontal',  //图例显示的样式：水平（horizontal）/垂直（vertical） 
            backgroundColor: '#ffc', //图例背景色 
            align: 'left',  //图例水平对齐方式 
            verticalAlign: 'top',  //图例垂直对齐方式 
            x: 100,  //相对X位移 
            y: 70,   //相对Y位移 
            floating: true, //设置可浮动 
            shadow: true  //设置阴影 
        }, 
        exporting: { 
            enabled: false  //设置导出按钮不可用 
        }, 
        series: [{  //数据列 
            name: '', 
            data: [19.3, 12.4, 4.1] 
        }, 
       ] 
     });
        var chart2 = $('#AllLine').highcharts({ 
        chart: { 
            
            defaultSeriesType: 'line', //图表类型line(折线图), 
            zoomType: 'x'   //x轴方向可以缩放 
        }, 
        credits: { 
            enabled: false   //右下角不显示LOGO 
        }, 
        title: { 
            text: '全部走势' //图表标题 
        },  
        xAxis: {  //x轴 
            categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', 
 '11月', '12月'], //x轴标签名称 
            gridLineWidth: 1, //设置网格宽度为1 
            lineWidth: 2,  //基线宽度 
            labels:{y:26}  //x轴标签位置：距X轴下方26像素 
        }, 
        yAxis: {  //y轴 
            title: {text: '(%)'}, //标题 
            lineWidth: 2 //基线宽度 
        }, 
        plotOptions:{ //设置数据点 
            line:{ 
                dataLabels:{ 
                    enabled:true  //在数据点上显示对应的数据值 
                }, 
                enableMouseTracking: false //取消鼠标滑向触发提示框 
            } 
        }, 
        legend: {  //图例 
            layout: 'horizontal',  //图例显示的样式：水平（horizontal）/垂直（vertical） 
            backgroundColor: '#ffc', //图例背景色 
            align: 'left',  //图例水平对齐方式 
            verticalAlign: 'top',  //图例垂直对齐方式 
            x: 100,  //相对X位移 
            y: 70,   //相对Y位移 
            floating: true, //设置可浮动 
            shadow: true  //设置阴影 
        }, 
        exporting: { 
            enabled: false  //设置导出按钮不可用 
        }, 
        series: [{  //数据列 
            name: '', 
            data: [ 4.6, 2.2, 4.5, 13.1, 19.8, 24.0, 25.8, 24.4, 19.3, 12.4, 4.1, 2.7] 
        }, 
        ] 
    }); 
}); 
   


