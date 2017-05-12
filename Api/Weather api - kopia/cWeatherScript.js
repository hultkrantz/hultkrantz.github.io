
class CWeather extends React.Component{
	constructor(){
		super();
		this.state = {
			temperature:0
		}
	}
	componentDidMount(){
	console.log("2")
		return fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json`)
		.then(function(res){
			return res.json();
		})
		.then(function(data){
			console.log(data.timeSeries[0].parameters[1].values[0])
			let temp = data.timeSeries[0].parameters[1].values[0] 
			return this.setState({
				temperature: temp.toFixed(1) + '°c'
			});
		}.bind(this));
	}
	render(){
		return(
		<div>
			<p>Temp : {this.state.temperature}</p>
		</div>	
		);
	}
}

ReactDOM.render(
<div>
	<div>Med React</div>
	<CWeather/> 
</div>
, document.getElementById("app"))

