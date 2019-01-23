import React from 'react';
import Grid from '@material-ui/core/Grid';

let classes = {
    about: {
        "margin-top": "5%",
        "margin-left": "20%",
        "margin-right": "30%",
        "margin-bottom": "20%",
    },
    root: {
        flexGrow: 1,
      },
}

const Education = (props) => {
    return (
        <div>
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={3}>
                s
                </Grid>
                <Grid item xs={3}>
                s
                </Grid>
                <Grid item xs={3}>
                s
                </Grid>
                <Grid item xs={3}>
                s
                </Grid>
            </Grid>
            
        </div>
    )
}

class About extends React.Component {
    render (){
        return (
            <div style={classes.about}>
                <section className="nes-container with-title is-centered">
                    <h2 className="title">About</h2>
                    <Education />
                </section>
            </div>
        );
    }
}

export default About;