import { React, Block, Container} from 'reapp-kit';

export default class Forecast extends React.Component {
	constructor(props){
    super(props);
    this.styles = {
			wrapper: {
				display: 'inline-block',
			},
			date: {
				width: (1/7*100)+'%',
				display: 'inline-block'
			}
		};
  }
	render(){
		let forecast = this.props.data;
		return (
			<div styles={this.styles.wrapper}>
				{forecast.map((day, i) => 
					<div key={i} styles={this.styles.date}>
						{day.temp.max}{'/'}{day.temp.min}
					</div>
				)}
			</div>
		);
		
	}
};