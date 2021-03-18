import React, { Component } from 'react';
import './App.css';
import lan from './language'

const LanguageContext = React.createContext({
	lang: lan.esp
});

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lang: lan.en,
			toggleLanguage: this.toggleLanguage
		};
	}


  toggleLanguage = () => {
    this.setState(state => ({
      lang: state.lang === lan.en ? lan.esp : lan.en
    }));
  };

  render() {
    return (
		<LanguageContext.Provider value={this.state}>
			<div className="App">
				<LanguageContext.Consumer>
					{({ lang }) => (
						<React.Fragment>
							<header className="App-header">
								<h1 className="App-title">{lang.header}</h1>
								<p>{lang.text}</p>
							</header>
							<Toolbar />
						</React.Fragment>
					)}
				</LanguageContext.Consumer>
			</div>
		</LanguageContext.Provider>
    );
  }
}


function Toolbar(props) {
	return (
		<div>
			<CloseButton />
		</div>
	);
}

function CloseButton(props) {
	return (
		<LanguageContext.Consumer>
			{({ lang, toggleLanguage }) => (
				<Button
					onClick={toggleLanguage}
					text={lang.changeLanguage}>
				</Button>
			)}
		</LanguageContext.Consumer>
	);
}

function Button(props) {
	return (
		<button className="App-button" onClick={props.onClick}>{props.text}</button>
	);
}


export default App;