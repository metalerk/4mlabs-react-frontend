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
            resume: `${process.env.PUBLIC_URL}/resume.pdf`,
            linkedin: 'https://www.linkedin.com/in/jose-luis-esteban-rodriguez-gonzalez-ba3962a5/',
            github: 'https://github.com/metalerk',
            blog: 'http://blog.luisesteban.mx',
        }
    }

    selectHandler(event){
        this.setState({
            selectedOption: event.target.name,
        })

    }

    changeLocation() {
        if (this.state.selectedOption === 'github' || this.state.selectedOption === 'resume' || this.state.selectedOption === 'linkedin' || this.state.selectedOption === 'blog') {
            window.open(this.routes[this.state.selectedOption], '_blank');
        } else {
            window.location.replace(this.routes[this.state.selectedOption])
        }
    }

    render() { 
        return (
            <section className="nes-container with-title is-dark is-centered" style={this.props.style}>
                <h2 className="title">Menu</h2>
                <h3>Kies een optie:</h3>
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
                    <span>Over mij</span>
                    </label>
                    <br />
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="resume" onChange={this.selectHandler} checked={this.state.selectedOption === "resume"}/>
                    <span>Resume</span>
                    </label>
                    <br />
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="linkedin" onChange={this.selectHandler} checked={this.state.selectedOption === "linkedin"}/>
                    <span>LinkedIn</span>
                    </label>
                    <br />
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="github" onChange={this.selectHandler} checked={this.state.selectedOption === "github"}/>
                    <span>GitHub</span>
                    </label>
                    <br />
                    <br />
                    <label>
                    <input type="radio" className="nes-radio" name="blog" onChange={this.selectHandler} checked={this.state.selectedOption === "blog"}/>
                    <span>Blog</span>
                    </label>
                    <br />
                    <br />
                    <button type="button" className="nes-btn" onClick={this.changeLocation}>Play!</button>
                </div>
                <iframe width="0%" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/75322351&color=%233e905c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </section>
        );
    }
}
 
export default Menu;