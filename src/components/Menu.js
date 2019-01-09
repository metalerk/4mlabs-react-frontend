import React from 'react';

class Menu extends React.Component {
    state = {
        selectedOption: 'home',
    }

    constructor(props){
        super(props);
        this.selectHandler = this.selectHandler.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.routes = {
            home: '/',
            about: '/about',
            resume: '/resume',
            contact: '/contact',
        }
    }

    selectHandler(event){
        this.setState({
            selectedOption: event.target.name,
        },
        () => console.log(this.state.selectedOption))

    }

    changeLocation() {
        window.location.replace(this.routes[this.state.selectedOption])
    }

    render() { 
        return (
            <section className="nes-container with-title is-centered">
                <h2 className="title">Menu</h2>
                <h3>Select an option:</h3>
                <br />
                <div>
                    <label>
                    <input type="radio" className="nes-radio" name="home" onChange={this.selectHandler} checked={this.state.selectedOption === "home"}/>
                    <span>Home</span>
                    </label>
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="about" onChange={this.selectHandler} checked={this.state.selectedOption === "about"}/>
                    <span>About</span>
                    </label>
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="resume" onChange={this.selectHandler} checked={this.state.selectedOption === "resume"}/>
                    <span>Resume</span>
                    </label>
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="contact" onChange={this.selectHandler} checked={this.state.selectedOption === "contact"}/>
                    <span>Contact</span>
                    </label>
                    <br />
                    <br />
                    <button type="button" className="nes-btn is-primary" onClick={this.changeLocation}>Play!</button>
                </div>
            </section>
        );
    }
}
 
export default Menu;