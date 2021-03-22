import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import Event from './Event'

const useStyles = makeStyles((theme) => ({
	pageTitle: {
		fontSize: 'calc(30px + 2vmin)',
        fontFamily: 'Lucida Console',
        marginBottom: 0,
	},
    headerButtonContainer: {
		//backgroundColor: 'grey',
        //maxWidth: '40vw'
	},
    headerContainer: {
		backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'black',
        padding: 45,
	},

}));




const EventsPage = (props) => {

    const classes = useStyles();
    const [events, setEvents] = useState(null);

    if (events == null) {
        let url = "/api/events";

        axios.get(url).then(res => {
            setEvents(res.data.events);
        });
    }

    let loaded_event = events == null ? [] : events

    return (
        <Box >
            <Grid container spacing={2} className={classes.headerContainer} direction="column">
                {loaded_event.map(event_item =>
                    <Grid item>
                        <Event props={event_item}/>
                    </Grid>
                )}
            </Grid>
        </Box>
	);
};

export default EventsPage;
