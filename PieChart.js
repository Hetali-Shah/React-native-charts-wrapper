import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';


class PieCharte extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      layout: 0,
      marker: {
        enabled: true,
        markerColor: processColor('#fff'),
        textColor: processColor('black'),
        markerFontSize: 40,
        markerWidth:20
      },
      data: {
        dataSets: [{
          values: [
            {value: 20,marker: 'Happy'},
            {value: 20,marker: 'Satisfied'},
            {value: 20,marker: 'Ok'},
            {value: 20,marker: 'UnSatisfied'},
            {value: 20,marker: 'Sad'},
            //{value: 18,marker: 'ZSad'}
          ],
          label: 'Pie dataset',
          config: {
            colors: [processColor('#E2515A'), processColor('#F38E8D'), processColor('#FFDDA0'),processColor('#99CDA5'),processColor('#6FBC7D')],
            valueTextSize: 0,
            //valueTextColor: processColor('green'),
            sliceSpace: 0,
            selectionShift: 0,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            //valueFormatter: "#.#'%'",
            //valueLineColor: processColor('green'),
            //valueLinePart1Length: 0.5
          }
        }],
      },
    }
  }
  _onLayout = (e) => {
    this.setState({ layout: e.nativeEvent.layout });
  }
  render() {
    console.log("this.state",this.state)
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        {!!this.state.layout && <PieChart
          style={styles.chart}
          data={this.state.data}
          legend={{enabled: false}}
          entryLabelColor={processColor('green')}
          entryLabelTextSize={30}
          drawEntryLabels={true}
          marker={this.state.marker}
          //rotationEnabled={true}
          //rotationAngle={45}
          //usePercentValues={false}
          //styledCenterText={{text:'Pie center text!', color: processColor('pink'), size: 20}}
          centerTextRadiusPercent={0}
          holeRadius={0}
          transparentCircleRadius={0}
          transparentCircleColor={processColor('#f0f0f088')}
          maxAngle={350}
          minAngle={250}
        /> }
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    flex: 1,
    width:200
  }
});

export default PieCharte;