let result1 = {
	searchTitle: "Feber"
	, url: "http://www.feber.se"
	, infoText: "JavaScript är ett prototyp - baserat skriptspråk som är dynamiskt, svagt typat och hanterar funktioner som första - klass - objekt.Javascript används främst på..."
}
let result2 = {
	searchTitle: "Tjock"
	, url: "http://www.tjock.se"
	, infoText: " Det var en gång en liten man som inte hittade hem. Att hans hatt, som i vanliga fall satt på hans kala skalle, även den var svårfunnen gjorde inte det hela bättre. Ack och ve för senilitet..."
}
class TwoSearchResults extends React.Component {
	render() {
		return <div> 
			<SearchResults item={this.props.r1} />
			<SearchResults item={this.props.r2} />
		<	/div>;
	}
}	
class SearchResults extends React.Component {
	render() {
		return <div>
			<a href = {this.props.item.url} > {this.props.item.searchTitle} </a> <br/>
			<span> {this.props.item.url} </span> 
			<p> {this.props.item.infoText} </p> 
				</div>
	}
}

ReactDOM.render(
	/*< div > < SearchResults item = {result1}/ > 
				< SearchResults item = {result2} / > 
				< /div>,*/
	< TwoSearchResults r1 = {result1} r2 = {result2} />,
	document.getElementById("app"))

