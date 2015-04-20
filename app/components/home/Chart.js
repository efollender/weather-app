import {React} from 'reapp-kit';
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
        data={areaData}
        yAccessor={d=>{
          return d[1];
        }}
        xAccessor={d=>{
          return d[0];
        }}
        xAxisTickCount={7}
        width={400}
        height={300}
      />
    );
  }
};

