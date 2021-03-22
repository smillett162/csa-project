import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import image1 from '../../../media/matthew.jpg';


const useStyles = makeStyles((theme) => ({
    inputContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'black',
        padding: 10,
        // marginTop: 10,
        // marginBottom: 10,
    },
    profileImage: {
        width: 200,
        height: 200,
        display: 'block',
        borderRadius: 100,
        WebkitBorderRadius: 100,
        objectFit: 'cover'
    },
    nameText: {
        marginLeft: 32,
        fontWeight: "bold",
    },
    profileDescriptionText: {
        textTransformation: 'none',
        fontWeight: 400,
        fontStyle: 'normal',
        paddingLeft: 32,
        paddingRight: 16,
    },
    itemEntry: {
        width: '100%',
        marginTop: 5,
        marginBottom: 10
    },
    divider: {
        margin: 20,
    },

}));


const CreateEvent = (props) => {

    const classes = useStyles();

    return (
        <Box>
            <Grid container direction="column" className={classes.inputContainer}>
                <Grid item className={classes.itemEntry}>
                    <TextField
                        required
                        id="person_name"
                        variant="outlined"
                        label="Name"
                        fullWidth
                    />
                </Grid>
                <Grid item className={classes.itemEntry}>
                    <TextField
                        required
                        id="person_role"
                        variant="outlined"
                        label="Role"
                        fullWidth
                    />
                </Grid>
                <Grid item className={classes.itemEntry}>
                    <TextField
                        required
                        id="profile_text"
                        variant="outlined"
                        label="Profile Text"
                        multiline
                        rowsMax={4}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Box>
	);
};

export default CreateEvent;
