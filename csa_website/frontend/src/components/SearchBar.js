import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from "@material-ui/core/styles";

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




const SearchBar = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.headerContainer}>
            <Box component="span">
                <Typography variant="h1" component="h2" className={classes.pageTitle}>
                    Conservatoriam Students Association
                </Typography>
            </Box>
            <Grid container className={classes.headerButtonContainer} justify="center">
                <Grid item>
                    <Button href={"/"}>
                        Home
                    </Button>
                </Grid>
                <Grid item>
                    <Button href={"/our_team"}>
                        Our Team
                    </Button>
                </Grid>
                <Grid item>
                    <Button href={"/events"}>
                        Events
                    </Button>
                </Grid>
            </Grid>
        </Box>
	);
};

export default SearchBar;
