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

import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FacebookIcon from '@material-ui/icons/Facebook';



 import image1 from '../../../media/matthew.jpg';
import image2 from '../../../media/concert.jpg';



const useStyles = makeStyles((theme) => ({

    eventImage: {
        width: '100%',
        height: '100%',
        maxWidth: '35vw',
        maxHeight: '42vh',
        objectFit: 'cover',
    },
    content: {
        width: "34vw",
        height: "40.0vh",
        marginLeft: "1vw",
        marginTop: "1vh",
    },
    eventCard: {
        width: "70.0vw",
        height: "42vh"
    },
    eventGrid: {
        width: "inherit",
        height: "inherit"
    },
    cardContainer: {
        width: "70.0vw",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    listItem: {
        maxHeight: "6.0vh"
    },
    imageContainer: {
        width: "35vw",
        height: "40.0vh",
        marginLeft: "1vw",
    },
    eventTitle: {
        margin: 16,
        fontWeight: "bold",
        height: "6.6vh"
    },
    eventContent: {
        paddingRight: 16,
    },
    listSection: {
        paddingRight: 16,
        // flex: '1 1 auto',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    gridContent: {
        height: '100%',
    },
    gridHeader: {
        width: '100%',
    },
    gridList: {
        width: '100%',
    },
    eventDescriptionText: {
        //marginBottom: 20,
        //fontFamily: 'proxima-nova',
        //color: 'rgba(82,82,82,.6)',
        //fontSize: 16,
        textTransformation: 'none',
        fontWeight: 400,
        fontStyle: 'normal',
        paddingLeft: 16,
        paddingRight: 16,
    },
    descriptionSection: {
        paddingBottom: 16,
    },
}));


const Event = (props) => {
    // Use this to access the styling json object
    const classes = useStyles();

    //const tile = props.tileData;

    // const tile = {
    //     title: "Welcome week",
    //     date: "Friday 05/03/21",
    //     time: "9am - 11am (2 hours)",
    //     link: "https://someurl.com",
    //     text: ["An amazing and fun event, this really is a must attend, doesn't get any better", "Make heaps of friends"],
    //     image: image2

    // }

    const tile = props.props;

    const prefix = '../../'

    return (
        <Paper className={classes.eventCard} elevation={5}>
            <Grid container className={classes.eventGrid}>
                <Grid item xs={6}>
                    <Grid container direction="column" className={classes.gridContent} >
                        <Grid item className={classes.gridHeader}>
                            <CardActionArea className={classes.listItem}>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    className={classes.eventTitle}>
                                    {tile.title}
                                </Typography>
                            </CardActionArea>
                        </Grid>
                        <Grid item className={classes.gridList}>
                            <CardActionArea className={classes.listSection}>
                                <List className={classes.list}>
                                    <ListItem className={classes.listItem}>
                                        <ListItemAvatar className={classes.listItem}>
                                            <Avatar className={classes.listItem}>
                                                <EventIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={tile.date} />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem className={classes.listItem}>
                                        <ListItemAvatar className={classes.listItem}>
                                            <Avatar className={classes.listItem}>
                                                <ScheduleIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={tile.time} />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem className={classes.listItem}>
                                        <ListItemAvatar className={classes.listItem}>
                                            <Avatar className={classes.listItem}>
                                                <FacebookIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={tile.link} />
                                    </ListItem>
                                </List>
                            </CardActionArea>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={1} direction="column" className={classes.descriptionSection}>
                                {tile.text.map(textSection =>
                                    <Grid item>
                                        <Typography className={classes.eventDescriptionText} variant="body2" color="textSecondary" component="p">
                                            {textSection}
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <img src={image2}  className={classes.eventImage} alt="logo" />
                </Grid>
            </Grid>
            
        </Paper>
    );
};

export default Event;