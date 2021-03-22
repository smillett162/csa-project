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

import image1 from '../../../media/matthew.jpg';


const useStyles = makeStyles((theme) => ({
    headerContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'black',
        padding: 45,
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
    profileText: {
        maxWidth: 'calc(70vw - 232px)',
    },
    divider: {
        margin: 20,
    },

}));


const MemberProfile = (props) => {

    const classes = useStyles();

    let image = props.props.image;
    let name = props.props.name;
    let role = props.props.role;
    let profileText = props.props.profileText;

    return (
        <Box>
            <Grid container>
                <Grid item>
                    <img src={image1}  className={classes.profileImage} alt="logo" />
                </Grid>
                <Grid item className={classes.profileText}>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        className={classes.nameText}>
                        {name}
                    </Typography>
                    <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="h2"
                            className={classes.nameText}>
                            {role}
                    </Typography>
                    <Grid container spacing={1} direction="column" className={classes.descriptionSection}>
                        {profileText.map(textSection =>
                            <Grid item>
                                <Typography className={classes.profileDescriptionText} variant="body2" color="textSecondary" component="p">
                                    {textSection}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
            {props.includeDivider ? <Divider className={classes.divider}/> : null}
        </Box>
	);
};

export default MemberProfile;
