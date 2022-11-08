import React from 'react';
import Grid from '@material-ui/core/Grid';

import BackButton from './BackButton.js';


let classes = {
    about: {
        "margin": "5%",
    },
    section: {
        "margin-top": "1%",
    },
    centered: {
        "text-align": "center",
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
            <div style={classes.centered}><BackButton /></div>
            <br />          
            <Grid container className={classes.root} spacing={12}>
                <Grid item xs={12} sm={12} md={12} lg={5} xl={6} style={classes.section}>
                    <h2 style={classes.centered}>English</h2>
                    <br />
                    <section className="nes-container with-title is-dark is-centered">
                        <h2 className="title">About me</h2>
                        <p>Name: Luis Esteban</p>
                        <p>Age: {this.getAge()} years old</p>
                        <p>Occupation: Software Developer / Musician</p>
                        <p>Location: Kingdom of the Netherlands</p>
                    </section>
                    <br />
                    <section className="nes-container with-title is-dark is-centered">
                        <h2 className="title">Interests</h2>
                        <p>Travel </p>
                        <p>🇲🇽🇳🇱🇩🇪🇧🇪🇮🇹🇻🇦🇨🇿🇸🇰🇦🇹🇷🇸🇭🇺</p>
                        <p>Play the guitar. I record music on my spare time.</p>
                        <p>Listen to music. Just started my own vinyl collection.</p>
                        <p>Learn other languages. Currently learning Dutch and German.</p>
                    </section>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={1} xl={1}></Grid>
                <Grid item xs={12} sm={12} md={12} lg={5} xl={6} style={classes.section}>
                    <h2 style={classes.centered}>Nederlands</h2>
                    <br />
                    <section className="nes-container with-title is-dark is-centered">
                        <h2 className="title">Over mij</h2>
                        <p>Naam: Luis Esteban</p>
                        <p>Leeftijd: {this.getAge()} jaar oud</p>
                        <p>Bezigheid: Software ontwikkelaar / Muzikant</p>
                        <p>Plaats: Koninkijk der Nederland</p>
                    </section>
                    <br />
                    <section className="nes-container with-title is-dark is-centered">
                        <h2 className="title">Interesses</h2>
                        <p>Reizen </p>
                        <p>🇲🇽🇳🇱🇩🇪🇧🇪🇮🇹🇻🇦🇨🇿🇸🇰🇦🇹🇷🇸🇭🇺</p>
                        <p>Gitaarspelen. In mijn vrije tijd neem ik muziek op.</p>
                        <p>Luisteren naar muziek. Net begonnen met mijn eigen vinylcollectie.</p>
                        <p>Leer andere talen. Momenteel Nederlands en Duits aan het leren.</p>
                    </section>
                </Grid>
            </Grid>
            <br />
            {/* <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314373540&amp;color=ff5500&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false"></iframe> */}
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/75322351&color=%233e905c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
        );
    }
}

export default About;