import {React} from 'reapp-kit';
const AreaChart = require('react-d3/areachart').AreaChart;

let dateObj = new Date();

export default class Chart extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let maxData = this.props.data.map((day,i)=>{
      
      return {x: i ,y: day.temp.max};
    });
    let minData = this.props.data.map((day,i)=>{
      let dateObj = Date.prototype.getDay(parseInt(i));
      return {x: i ,y: day.temp.min};
    });
    let areaData = [{name:'lows', values: minData}, {name:'highs', values: maxData}];
    console.log(areaData);
    return (
      <AreaChart
        data={areaData}
      />
    );
  }
};

