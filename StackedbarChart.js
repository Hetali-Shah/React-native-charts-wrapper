import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

class StackedbarChart extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: "SQUARE",
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [
            {y:[10, 42, 13,43,34], marker: ["Task area / activity", "Arbeitszeitbelastung", "Working equipment","Health","Professional training"]},
            {y:[5,55,54,32,31], marker: ["Task area / activity", "Arbeitszeitbelastung", "Working equipment","Health","Professional training"]},
            {y:[3,7,10,21,47], marker: ["Task area / activity", "Arbeitszeitbelastung", "Working equipment","Health","Professional training"]},
            {y:[6,64,65,88,66], marker: ["Task area / activity", "Arbeitszeitbelastung", "Working equipment","Health","Professional training"]},
            {y:[4,76,34,45,77], marker: ["Task area / activity", "Arbeitszeitbelastung", "Working equipment","Health","Professional training"]},
          ],
          label: '',
          config: {
            colors: [processColor('#E2515A'), processColor('#F38E8D'), processColor('#FFDDA0'),processColor('#99CDA5'),processColor('#6FBC7D')],
            stackLabels: ['Task area / activity', 'Arbeitszeitbelastung', 'Working equipment','Health','Professional training']
          }
        }],
      },
      highlights: [{x: 1, stackIndex: 2}, {x: 2, stackIndex: 1}],
      xAxis: {
        valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'],
        granularityEnabled: true,
        granularity: 1,
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
    };
  }

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

      <View style={{flex: 1}}>
        <View style={styles.container}>
          <BarChart
            style={styles.chart}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            data={this.state.data}
            legend={{enabled: false}}
            drawValueAboveBar={false}
            marker={{
              enabled: true,
              markerColor: processColor('#F0C0FF8C'),
              textColor: processColor('black'),
              markerFontSize: 30,
            }}
            //highlights={this.state.highlights}
            //onSelect={this.handleSelect.bind(this)}
            //onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});


export default StackedbarChart;