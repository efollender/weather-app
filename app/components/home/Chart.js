import {React} from 'reapp-kit';
const d3 = require('d3');
const AreaChart = require('react-d3/areachart').AreaChart;

export default class Chart extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let areaData = [{name:'lows', values: []}, {name:'highs', values: []}];
    let maxData = this.props.data.map((day,i)=>{
      areaData[0].values.push([i+1, day.temp.max]);
    });
    let minData = this.props.data.map((day,i)=>{
      areaData[1].values.push([i+1, day.temp.min]);
    });
    console.log(areaData);
    return (
      <AreaChart
        styles={styles.self}
        data={areaData}
        yAccessor={d=>{
          return d[1];
        }}
        xAccessor={d=>{
          return d[0];
        }}
        yAxisLableOffset={0}
        xAxisLabelOffset={0}
        xAxisTickCount={7}
        viewBox={'0 0 400 150'}
        axesColor={'#fff'}
        colors={d3.scale.category20b()}
      />
    );
  }
};

let styles = {
  self: {
    color: 'white',
    fill: '#fff'
  },

};