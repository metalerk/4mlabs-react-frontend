import React from 'react';
import Grid from '@material-ui/core/Grid';

let classes = {
    about: {
        margin: "auto",
    },
    root: {
        flexGrow: 1,
      },
}

// const Education = (props) => {
//     return (
//         <div>
//             <Grid container className={classes.root} spacing={16}>
//                 <Grid item xs={3}>
                
//                 </Grid>
//                 <Grid item xs={3}>
//                 s
//                 </Grid>
//                 <Grid item xs={3}>
//                 s
//                 </Grid>
//                 <Grid item xs={3}>
//                 s
//                 </Grid>
//             </Grid>
            
//         </div>
//     )
// }

class About extends React.Component {
    getAge(){
        // taken from https://stackoverflow.com/a/21984136/9012412
        let birthday = new Date(1992, 5, 24, 9, 30, 0, 0)
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    render (){
        return (
            <div style={classes.about}>
            <Grid container className={classes.root} spacing={12}>
                <Grid item xs={5}>
                    <h2>English</h2>
                    <br />
                    <section className="nes-container with-title is-centered">
                        <h2 className="title">About me</h2>
                        <p>My name's Luis Esteban</p>
                        <p>I have {this.getAge()} years old.</p>
                        <p>I'm a software programmer and sometimes a musician.</p>
                        <p>Currently I'm living in Guadalajara, México.</p>
                        <p>My favorite programming language is Python because it is beautiful and very powerful.
                            I'm also interested in languages like Erlang, Go, Rust, Elixir or F#.</p>
                    </section>
                    <br />
                    <section className="nes-container with-title is-centered">
                        <h2 className="title">Interests</h2>
                        <p>I like to play videogames, I have a Xbox One and will have a PS4 soon, but retro ones are the best,
                            that's why I set up Retropie in a Raspberry Pi 3 to enjoy titles like Super Mario, Metroid, Crash Team Racing and so on.</p>
                        <p>I also play the guitar, my favorite one of my collection is a black Les Paul Standard.</p>
                        <p>I like Rock, Metal (almost all flavours, my favorite is black and grind), EBM, Synthpop and Electronic.</p>
                    </section>
                </Grid>
                <Grid item xs={5}>
                    <h2>Deutsch</h2>
                        <br />
                        <section className="nes-container with-title is-centered">
                            <h2 className="title">Über mich</h2>
                            <p>Ich heiße Luis Esteban</p>
                            <p>Ich bin {this.getAge()} Jahre alt.</p>
                            <p>Ich studiere Deutsch.</p>
                            <p>Ich bin Softwareentwickler, manchmal Musiker.</p>
                            <p>Zur Zeit lebe ich in Guadalajara, México.</p>
                            <p>Meine Lieblingsprogrammiersprache ist Python weil es schön und sehr kraftvoll ist.
                                Übrigens, interessiere mich auch in Programmiersprachen wie Erlang, Go, Rust, Elixir und F#.
                            </p>
                        </section>
                        <br />
                        <section className="nes-container with-title is-centered">
                            <h2 className="title">Interessen</h2>
                            <p>Ich spiele gerne Videospiele, habe ich ein Xbox One und werde bald eine PS4 haben, aber Retro ist das Beste,
                                deshalb, habe ich Retropie in einem Raspberry Pi eingerichtet, um Titel wie Super Mario, Metroid, Crash Team Racing, usw. zu genießen.
                            </p>
                            <p>Ich spiele auch Guitarre, mein Favorit aus meiner Sammlung ist ein schwarzer Les Paul Standard.</p>
                            <p>Ich mag Rock, Metal (fast alle Subgenres, mein Favorit ist black und grind), EBM, Synthpop, Electronic, usw.</p>
                        </section>
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default About;