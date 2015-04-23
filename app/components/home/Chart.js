import {React} from 'reapp-kit';
const d3 = require('d3');
const AreaChart = require('react-d3/areachart').AreaChart;

export default class Chart extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let areaData = [{name:'lows', values: []}, {name:'highs', values: []}];
    // let maxData = this.props.data.map((day,i)=>{
    //   areaData[0].values.push([i+1, day.temp.max]);
    // });
    // let minData = this.props.data.map((day,i)=>{
    //   areaData[1].values.push([i+1, day.temp.min]);
    // });
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
        xAxisTickCount={7}
        margins={{top: 0, right: 0, bottom: 0, left: 0}}
        viewBox={'0 0 400 200'}
        axesColor={'#fff'}
        colors={d3.scale.category20c()}
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