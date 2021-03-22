import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'

import { makeStyles } from "@material-ui/core/styles";

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
	
    linkSectionContainer: {
		backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: 'black',
        margin: 20,
        maxWidth: '32vw'
	},
    linkImage: {
        maxWidth: 'inherit',
        width: '100%',
        marginBottom: 20,
        maxHeight: 400,
        objectFit: 'cover',
    },
    linkHeaderText: {
        marginBottom: 20,
        fontFamily: 'din-condensed-web',
        fontSize: 24,
        lineHeight: '2.2em',
        textTransformation: 'none',
        LetterSpacing: '.02em',
        fontWeight: 400,
        fontStyle: 'normal',

    },
    linkTextSection: {
        marginBottom: 20,
        //fontFamily: 'proxima-nova',
        color: 'rgba(82,82,82,.6)',
        fontSize: 14,
        lineHeight: '2.2em',
        textTransformation: 'none',
        LetterSpacing: '.02em',
        fontWeight: 400,
        fontStyle: 'normal',
    },


}));




const LinkSection = (props) => {

    const classes = useStyles();

    let link = props.props.link;
    let image = props.props.image;
    let headerText = props.props.headerText;
    let text = props.props.text;
    let buttonText = props.props.buttonText;

    return (
        <Box className={classes.linkSectionContainer}>
            <img src={image} className={classes.linkImage} alt="logo" />
            <Typography className={classes.linkHeaderText} variant="h3" component="h3">
                {headerText}
            </Typography>
            {text.map(textSection =>
                <Typography className={classes.linkTextSection} variant="body" component="h3">
                    {textSection}
                </Typography>
            )}
            <Box className={classes.buttonContainer}>
                <Button variant="outline-dark" href={link}>
                    {buttonText}
                </Button>
            </Box>
        </Box>
	);
};

export default LinkSection;
