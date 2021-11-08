var trace1 = {
  x: [1873, 10000],
  y: [0.1, 2.94256],
  mode: 'lines',
  name: 'Ga2O3'
};

var trace2 = {
  x: [100, 10000],
  y: [0.94576, 9457.57],
  mode: 'lines',
  name: 'Si'
};

var trace3 = {
  x: [850, 10000],
  y: [0.1, 14.8799],
  mode: 'lines',
  name: 'GaN',
  line: {dash: 'dash',},
};

var trace4 = {
  x: [585.7, 10000],
  y: [0.1, 29.82],
  mode: 'lines',
  name: 'SiC',
  line: {dash: 'dash',},
};

var trace5 = {
  x: [1975, 2321, 1850, 428, 344, 384, 755, 505, 230, 170, 185, 680, 2440, 2462, 6720],
  y: [520, 959, 2176, 0.713, 999.9, 108, 50, 17.2, 4.86, 1.8, 0.45, 11.7, 63, 17, 5500],
  mode: 'markers+text',
  type: 'scatter',
  name: 'Ga2O3 lateral FETs',
  text: ['UB\' 19', 'ETRI\' 19', 'UB\' 18', 'OSU\' 18', 'Korea U\' 18', 'UB\' 17', 'NICT\' 16', 'AFRL\' 18', 'AFRL\' 16', 'OSU\' 18', 'Purdue\' 17', 'Hebei SRI\' 19', 'Hebei SRI\' 20', 'Utah\' 21', 'UB\' 20'],
  textposition: 'bottom',
  marker: {
    size: 12,
    symbol: 'square',
    }
};

var trace6 = {
  x: [3000, 2096, 975, 2300, 2250, 1076, 240, 1100, 687],
  y: [24.3, 11.3, 6, 250, 10.2, 5.1, 2.9, 2, 0.32],
  mode: 'markers+text',
  type: 'scatter',
  name: 'Ga2O3 SBDs',
  text: ['Xidian\' 18','Cornell\' 18', 'UFL\' 17', 'UFL\' 18', 'Xidian\' 18', 'NICT\' 17', 'Novel Crystal\' 17', 'VT\' 19', 'Utah\' 21'],
  textposition: 'bottom',
  marker: {
    size: 13,
    }
};

var trace7 = {
  x: [1057, 2660, 263],
  y: [18, 25.2, 135],
  mode: 'markers+text',
  type: 'scatter',
  name: 'Ga2O3 Vertical FETs',
  text: ['Cornell\' 18', 'Cornell\' 19', 'NICT\' 19'],
  textposition: 'bottom',
  marker: {
    size: 13,
    symbol: 'diamond',
    }
};

var data = [ trace1, trace2, trace3, trace4, trace5, trace6, trace7 ];

var layout = {
  title: {
    text: 'Published Ga2O3 Devices Baliga\'s Figure of Merit',
    font: {size: 20,},
    x: 0.1,
        },

  autosize: false,
  width: 850,
  height: 700,
  xaxis: {
    title: {
      text: 'Breakdown Voltage (V)',
      font: {
          size: 20,
            },
          },
    tickfont: {
    size: 18,
    },
    type: 'log',
    range: [2, 4],
    mirror: 'ticks',
    linecolor: '#636363',
    linewidth: 4,
  },
  yaxis: {
    title: {
      text: 'On-resistance (mΩ· cm^2)',
      font: {
          size: 20,
            },
          },
      tickfont: {
      size: 18,
      },
    type: 'log',
    range: [-1, 4],
    mirror: 'ticks',
    linecolor: '#636363',
    linewidth: 4,
  }
};

Plotly.newPlot('myDiv', data, layout);
