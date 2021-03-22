import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import TypeWords from './TypeWords';
import LinkSection from './LinkSection';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


import './parallax.css';

import { makeStyles } from "@material-ui/core/styles";

import image1 from '../../../media/matthew.jpg';
import image2 from '../../../media/concert.jpg';


const useStyles = makeStyles((theme) => ({
	
    centreContainer: {
		backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
	},
    mainImage: {
        backgroundSize : 'cover'
		//height: '30vh',
	},
    aboutUsContainer: {
        marginTop: 30,
    },
    welcomeContainer: {
		backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 30,
        paddingTop: 200,
        paddingBottom: 200,
	}, 
    welcomeText: {
        fontFamily: 'din-condensed-web'
    },
    linksSectionContainer: {
        justifyContent: 'center',
        marginBottom: 100,
    },
    footerContainer: {
        justifyContent: 'center',
        marginTop: 150,
        marginBottom: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialMediaSection: {
        justifyContent: 'center',
    },


}));

let link1 = {
    'link': "/our_team",
    'image': image1, 
    'text':[
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
    ],

    'headerText': "OUR PEOPLE",
    'buttonText': "MEET OUR TEAM",
}

let link2 = {
    'link': "/events",
    'image': image2, 
    'text': ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",],
    'headerText': "UPCOMING EVENTS",
    'buttonText': "WHAT'S ON",
}


const HomePage = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.centreContainer}>
            
            <div className="parallax"></div>

            <div className="bottom-text">

                <Box className={classes.welcomeContainer}>
                    <Typography className={classes.welcomeText}variant="h2" component="h2">
                        Welcome to the Conservatoriam Students Association
                    </Typography>
                    <Typography className={classes.welcomeText} variant="h3" component="h3">
                        For Students. By Students
                    </Typography>
                </Box>

                <Grid className={classes.linksSectionContainer} container justifyContent="center">
                    <Grid item>
                        <LinkSection props={link1}/>  
                    </Grid>
                    <Grid item>
                        <LinkSection props={link2}/>  
                    </Grid>
                </Grid>
                <Box className={classes.centreContainer}>
                    <div className="typeContainer">
                        {/* <img src={logo} className={classes.mainImage} alt="logo" /> */}
                        <TypeWords/>
                    </div>
                </Box>
                <Box className={classes.centreContainer}>
                    <Box className={classes.footerContainer}>
                        <Typography className={classes.welcomeText} variant="h3" component="h3">
                            Conservatoriam Students Association
                        </Typography>
                        <Grid container className={classes.socialMediaSection}>
                            <Grid item>
                                <FacebookIcon/>
                            </Grid>
                            <Grid item>
                                <InstagramIcon/>
                            </Grid>
                            <Grid item>
                                <MailOutlineIcon/>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>

        </Box>
	);
};

export default HomePage;
