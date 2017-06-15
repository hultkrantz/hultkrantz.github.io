class App extends React.Component {
    constructor(props){
        super(props);
        //all the states in this program that fills it with data so we can forever stay updated wow
        this.state = {
            games: [
                {
                    title: 'The Legends of Zelda: Ocarina of Time',
                    year: 1998,
                    description: "The Legend of Zelda: Ocarina of Time er et action-eventyrspill utviklet av " +
                    "Nintendo EAD og utgitt av Nintendo til Nintendo 64. Det er det femte spillet i The Legend of Zelda-serien " +
                    "og det første spillet som ble gitt ut til Nintendo 64",
                    system: 'Nintendo64'
                }, {
                    title: 'Mass Effect 3',
                    year: 2012,
                    description: "No description",
                    system: 'PC/XBOX/PS4'
                }, {
                    title: 'World of Warcraft: Legion',
                    year: 2016,
                    description: "World of Warcraft: Legion ofte forkortet til Legion, er den sjette utvidelsespakken" +
                    " til World of Warcraft utgitt av Blizzard Entertainment. Utvidelsespakken ble for første gang avslørt på" +
                    " Gamescom 2015 den 6. august 2015.",
                    system: 'PC'
                }
                ],
            title: '',
            description: '',
            year: '',
            system: '',
            style: {
                fontSize: '24px',
                backgroundColor: 'red',
                letterSpacing: 10
            }
        };
        //Bind us together so we can always be as one
        this.addGameFunc = this.addGameFunc.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.retrieveDataFromList = this.retrieveDataFromList.bind(this);
    }

    addGameFunc() {
        let newGame = {title: this.state.title, description: this.state.description, year: this.state.year, system: this.state.system};
        this.setState({games: this.state.games.concat([newGame])});
    };

    //Handle input change
    handleChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    retrieveDataFromList(index){
        let game = this.state.games[index];
        this.setState({
            title: game.title,
            description: game.description,
            year: game.year,
            system: game.system
        });
    console.log(game);
    }

    render(){

        return(
            <div>
                <AddGame handleAdd={this.addGameFunc}
                         handleChange={this.handleChange} data={this.state}/>
                <GamesList gamesData={this.state.games} handleClick={this.retrieveDataFromList} styling={this.state.style}/>
            </div>
        );
    }
}

class AddGame extends React.Component {
    render(){

        let myValue = '';


        function valueDisplayer(input, data){
            console.log(input);
            if(input === 'title') {
                myValue = data.title;
            } else if (input === 'description') {
                myValue = data.description;
            } else if (input === 'year'){
                myValue = data.year;
            } else {
                myValue = data.system
            }
        }

        const arr =['title', 'description', 'year', 'system'],
         inputs = arr.map((input, i)=>{return <input key={'input' + i} name={input} onChange={this.props.handleChange} onLoad={valueDisplayer(input, this.props.data)} value={myValue} placeholder={input} type="text" style={this.props.styling}/>});
        return(
            <div>
                {inputs}
                <button onClick={this.props.handleAdd}>Add</button>
            </div>
        );
    }
}

class GamesList extends React.Component {
    render(){
        let displayGames = this.props.gamesData.map((game, index)=>{return <li key={'game' + index} onClick={()=>this.props.handleClick(index)}>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <p>Released: {game.year}, system: {game.system}</p>
        </li>});
        return(
            <ul className="listOfGames" style={this.props.styling}>
                {displayGames}
            </ul>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));