// chartRadaritem01
//定義變數
var chartRadarDOMitem01;
var chartRadarDataitem01;
var chartRadarOptionsitem01;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,100, 1)';
chartRadarDOMitem01 = document.getElementById("chartRadaritem01");
chartRadarDataitem01;
chartRadarOptionsitem01 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(90);
graphData.push(90);
graphData.push(90);
graphData.push(90);
graphData.push(100);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem01 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem01, {
    type: 'radar',
    data: chartRadarDataitem01,
    options: chartRadarOptionsitem01
});





// chartRadaritem02
//定義變數
var chartRadarDOMitem02;
var chartRadarDataitem02;
var chartRadarOptionsitem02;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem02 = document.getElementById("chartRadaritem02");
chartRadarDataitem02;
chartRadarOptionsitem02 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(75);
graphData.push(85);
graphData.push(85);
graphData.push(85);
graphData.push(100);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem02 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem02, {
    type: 'radar',
    data: chartRadarDataitem02,
    options: chartRadarOptionsitem02
});





// chartRadaritem03
//定義變數
var chartRadarDOMitem03;
var chartRadarDataitem03;
var chartRadarOptionsitem03;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem03 = document.getElementById("chartRadaritem03");
chartRadarDataitem03;
chartRadarOptionsitem03 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(75);
graphData.push(85);
graphData.push(85);
graphData.push(80);
graphData.push(85);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem03 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem03, {
    type: 'radar',
    data: chartRadarDataitem03,
    options: chartRadarOptionsitem03
});





// chartRadaritem04
//定義變數
var chartRadarDOMitem04;
var chartRadarDataitem04;
var chartRadarOptionsitem04;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem04 = document.getElementById("chartRadaritem04");
chartRadarDataitem04;
chartRadarOptionsitem04 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(100);
graphData.push(95);
graphData.push(90);
graphData.push(90);
graphData.push(100);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem04 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem04, {
    type: 'radar',
    data: chartRadarDataitem04,
    options: chartRadarOptionsitem04
});





// chartRadaritem05
//定義變數
var chartRadarDOMitem05;
var chartRadarDataitem05;
var chartRadarOptionsitem05;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem05 = document.getElementById("chartRadaritem05");
chartRadarDataitem05;
chartRadarOptionsitem05 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(100);
graphData.push(90);
graphData.push(90);
graphData.push(90);
graphData.push(85);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem05 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem05, {
    type: 'radar',
    data: chartRadarDataitem05,
    options: chartRadarOptionsitem05
});





// chartRadaritem06
//定義變數
var chartRadarDOMitem06;
var chartRadarDataitem06;
var chartRadarOptionsitem06;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem06 = document.getElementById("chartRadaritem06");
chartRadarDataitem06;
chartRadarOptionsitem06 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(70);
graphData.push(80);
graphData.push(70);
graphData.push(80);
graphData.push(75);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem06 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem06, {
    type: 'radar',
    data: chartRadarDataitem06,
    options: chartRadarOptionsitem06
});





// chartRadaritem07
//定義變數
var chartRadarDOMitem07;
var chartRadarDataitem07;
var chartRadarOptionsitem07;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem07 = document.getElementById("chartRadaritem07");
chartRadarDataitem07;
chartRadarOptionsitem07 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(85);
graphData.push(96);
graphData.push(95);
graphData.push(96);
graphData.push(90);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem07 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem07, {
    type: 'radar',
    data: chartRadarDataitem07,
    options: chartRadarOptionsitem07
});





// chartRadaritem08
//定義變數
var chartRadarDOMitem08;
var chartRadarDataitem08;
var chartRadarOptionsitem08;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem08 = document.getElementById("chartRadaritem08");
chartRadarDataitem08;
chartRadarOptionsitem08 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(85);
graphData.push(95);
graphData.push(95);
graphData.push(95);
graphData.push(90);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem08 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem08, {
    type: 'radar',
    data: chartRadarDataitem08,
    options: chartRadarOptionsitem08
});





// chartRadaritem09
//定義變數
var chartRadarDOMitem09;
var chartRadarDataitem09;
var chartRadarOptionsitem09;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem09 = document.getElementById("chartRadaritem09");
chartRadarDataitem09;
chartRadarOptionsitem09 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(85);
graphData.push(90);
graphData.push(85);
graphData.push(85);
graphData.push(90);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem09 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem09, {
    type: 'radar',
    data: chartRadarDataitem09,
    options: chartRadarOptionsitem09
});





// chartRadaritem10
//定義變數
var chartRadarDOMitem10;
var chartRadarDataitem10;
var chartRadarOptionsitem10;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem10 = document.getElementById("chartRadaritem10");
chartRadarDataitem10;
chartRadarOptionsitem10 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(70);
graphData.push(80);
graphData.push(70);
graphData.push(80);
graphData.push(75);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem10 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem10, {
    type: 'radar',
    data: chartRadarDataitem10,
    options: chartRadarOptionsitem10
});





// chartRadaritem11
//定義變數
var chartRadarDOMitem11;
var chartRadarDataitem11;
var chartRadarOptionsitem11;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem11 = document.getElementById("chartRadaritem11");
chartRadarDataitem11;
chartRadarOptionsitem11 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(70);
graphData.push(80);
graphData.push(70);
graphData.push(80);
graphData.push(75);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem11 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem11, {
    type: 'radar',
    data: chartRadarDataitem11,
    options: chartRadarOptionsitem11
});





// chartRadaritem12
//定義變數
var chartRadarDOMitem12;
var chartRadarDataitem12;
var chartRadarOptionsitem12;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem12 = document.getElementById("chartRadaritem12");
chartRadarDataitem12;
chartRadarOptionsitem12 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(70);
graphData.push(80);
graphData.push(70);
graphData.push(80);
graphData.push(75);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem12 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem12, {
    type: 'radar',
    data: chartRadarDataitem12,
    options: chartRadarOptionsitem12
});





// chartRadaritem13
//定義變數
var chartRadarDOMitem13;
var chartRadarDataitem13;
var chartRadarOptionsitem13;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem13 = document.getElementById("chartRadaritem13");
chartRadarDataitem13;
chartRadarOptionsitem13 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(70);
graphData.push(80);
graphData.push(70);
graphData.push(80);
graphData.push(75);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem13 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem13, {
    type: 'radar',
    data: chartRadarDataitem13,
    options: chartRadarOptionsitem13
});





// chartRadaritem14
//定義變數
var chartRadarDOMitem14;
var chartRadarDataitem14;
var chartRadarOptionsitem14;

//載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOMitem14 = document.getElementById("chartRadaritem14");
chartRadarDataitem14;
chartRadarOptionsitem14 =
    {
        scale:
            {
                ticks:
                    {
                        fontSize: 16,
                        beginAtZero: true,
                        maxTicksLimit: 7,
                        min:0,
                        max:100
                    },
                pointLabels:
                    {
                        fontSize: 12,
                        color: '#0044BB'
                    },
                gridLines:
                    {
                        color: '#009FCC'
                    }
            }
    };

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(70);
graphData.push(80);
graphData.push(70);
graphData.push(80);
graphData.push(75);


console.log("--------Rader Create-------------");
console.log(graphData);

//CreateData
chartRadarDataitem14 = {
    labels: ['item01', 'item02', 'item03', 'item04', 'item05'],
    datasets: [{
        label: "Skill Level",
        backgroundColor: "rgba(17, 34, 51,0.7)",
        borderColor: "rgba(63,63,74,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
        pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 5,
        data: graphData}]
};

//Draw
var chartRadar = new Chart(chartRadarDOMitem14, {
    type: 'radar',
    data: chartRadarDataitem14,
    options: chartRadarOptionsitem14
});