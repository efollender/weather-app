import { React, Block, Container} from 'reapp-kit';
const dates = require('../../../assets/shared/scripts/dateHelpers');

export default class Forecast extends React.Component {
	constructor(props){
    super(props);
    this.styles = {
			wrapper: {
				display: 'inline-block',
			},
			date: {
				width: (1/7*100)+'%',
				display: 'inline-block',
				fontSize: '1.2em',
				textAlign: 'center'
			}
		};
  }
	render(){
		let forecast = this.props.data;
		return (
			<div styles={this.styles.wrapper}>
				{forecast.map((day, i) => 
					<div key={i} styles={this.styles.date}>
						{dates.getDayName(i)}<br/>
						{day.temp.max}{'/'}{day.temp.min}
					</div>
				)}
			</div>
		);
		
	}
};