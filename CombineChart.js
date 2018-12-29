import React, {Component} from 'react';
import {View, Text, StyleSheet, processColor, ScrollView} from 'react-native';

import {CombinedChart, BarChart} from 'react-native-charts-wrapper';

const styles = StyleSheet.create({
  container: {
  },
  chart: {
    height:'100%',
    width:'100%',
  }
});

export default class CombineChart extends Component {

  constructor() {
    super();
    this.state = {
      xAxis: {
        //valueFormatter: ['Task area / activity', 'Arbeitszeitbelastung', 'Working equipment','Health','Professional training'],
        granularityEnabled: false,
        granularity: 1,
        // drawLabels: false,
        // drawAxisLine: false,
        // drawGridLines: false,
        // zeroLine: {
        //   enabled: true,
        //   lineWidth: 0
        // },
        enabled: false
      },

      yAxis: {
        valueFormatter: ['Task area / activity', 'Arbeitszeitbelastung', 'Working equipment','Health','Professional training'],
        left: {
          granularityEnabled: false,
          granularity: 10,
          drawLabels: false,
          drawAxisLine: false,
          drawGridLines: false,
          zeroLine: {
            enabled: true,
            lineWidth: 0
          }
        },
        right: {
          granularityEnabled: false,
          granularity: 100,
          drawLabels: false,
          drawAxisLine: false,
          drawGridLines: false,
          zeroLine: {
            enabled: true,
            lineWidth: 0
          }
        }
      },

      marker: {
        enabled: true,
        markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('black'),
        markerFontSize: 40,
        markerWidth:20
      },
      config:{
        barWidth: 0.5,
      },

      data: {
        barData: {
          dataSets: [{
            values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
            label: 'Bar dataSet',
            config: {
              color: processColor('teal'),
              barShadowColor: processColor('lightgrey'),
              highlightAlpha: 90,
              highlightColor: processColor('red'),
            }
          }],
        },
        lineData: {
          dataSets: [{
            values: [{x: 4, y: 135}, {x: 5, y: 0.88}, {x: 6, y: 0.77}, {x: 7, y: 105}],
            label: 'Sine function',

            config: {
              drawValues: false,
              colors: [processColor('green')],
              mode: "CUBIC_BEZIER",
              drawCircles: false,
              lineWidth: 2,
              axisDependency: "RIGHT",
            }
          },],
        },

      }
    };

  }

  // componentDidMount() {
  //   // in this example, there are line, bar, candle, scatter, bubble in this combined chart.
  //   // according to MpAndroidChart, the default data sequence is line, bar, scatter, candle, bubble.
  //   // so 4 should be used as dataIndex to highlight bubble data.
  //
  //   // if there is only bar, bubble in this combined chart.
  //   // 1 should be used as dataIndex to highlight bubble data.
  //
  //   this.setState({...this.state, highlights: [{x: 1, y:150, dataIndex: 4}, {x: 2, y:106, dataIndex: 4}]})
  // }


  //static displayName = 'Combined';

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    console.log(event.nativeEvent)
  }

  render() {
    return (
        <View style={styles.container}>
          <CombinedChart
            data={this.state.data}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            //onSelect={this.handleSelect.bind(this)}
            //onChange={(event) => console.log(event.nativeEvent)}
            marker={this.state.marker}
            highlights={this.state.highlights}
            highlightFullBarEnabled={false}
            legend={{enabled: false}}
            style={styles.chart}/>

        </View>
    );
  }
}
