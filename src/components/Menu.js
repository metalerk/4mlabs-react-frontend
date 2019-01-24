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
            home: '/#',
            about: '/about',
            resume: '/resume',
            contact: '/contact',
        }
    }

    selectHandler(event){
        this.setState({
            selectedOption: event.target.name,
        })

    }

    changeLocation() {
        window.location.replace(this.routes[this.state.selectedOption])
    }

    render() { 
        return (
            <section className="nes-container with-title is-dark is-centered" style={this.props.style}>
                <h2 className="title">Menu</h2>
                <h3>Select an option:</h3>
                <br />
                <div>
                    <label>
                    <input type="radio" className="nes-radio" name="home" onChange={this.selectHandler} checked={this.state.selectedOption === "home"}/>
                    <span>Home</span>
                    </label>
                    <br />
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="about" onChange={this.selectHandler} checked={this.state.selectedOption === "about"}/>
                    <span>About</span>
                    </label>
                    <br />
                    <br />
                    {/* <label>
                    <input type="radio" className="nes-radio" name="resume" onChange={this.selectHandler} checked={this.state.selectedOption === "resume"}/>
                    <span>Resume</span>
                    </label>
                    <br />
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="contact" onChange={this.selectHandler} checked={this.state.selectedOption === "contact"}/>
                    <span>Contact</span>
                    </label>
                    <br />
                    <br /> */}
                    <button type="button" className="nes-btn" onClick={this.changeLocation}>Play!</button>
                </div>
                <iframe width="0%" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/75322351&color=%233e905c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </section>
        );
    }
}
 
export default Menu;