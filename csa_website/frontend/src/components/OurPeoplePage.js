import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Popover from '@material-ui/core/Popover';
import Modal from 'react-bootstrap/Modal'

import image1 from '../../../media/matthew.jpg';

import { makeStyles } from "@material-ui/core/styles";

import MemberProfile from './MemberProfile';
import TypeWords from './TypeWords';
import CreateEvent from './CreateEvent';

import  Cookies from 'js-cookie';

import axios from "axios";


import './parallax.css';


const useStyles = makeStyles((theme) => ({
	pageTitle: {
		fontSize: 'calc(30px + 2vmin)',
        fontFamily: 'Lucida Console',
        marginBottom: 0,
	},
    introContainer: {
        width: "70.0vw",
        // height: "42vh",
        padding: 16,
        marginBottom: 10,
    },
    profilesContainer: {
        width: "70.0vw",
        // height: "42vh",
        padding: 16,
        marginTop: 10,
    },
    headerContainer: {
		backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'black',
        marginBottom: 50,

	},
    aboutUsHeader: {
		backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'black',
	},
    aboutUsHeaderText: {
        marginBottom: 20,
        fontFamily: 'din-condensed-web',
        fontSize: 30,
        lineHeight: '2.2em',
        textTransformation: 'none',
        LetterSpacing: '.02em',
        fontWeight: 400,
        fontStyle: 'normal',

    },
    aboutUsTextSection: {
        marginTop: 10,
        marginBottom: 10,
        //fontFamily: 'proxima-nova',
        //color: 'rgba(82,82,82,.6)',
        color: 'rgba(82,82,82,.8)',
        fontSize: 18,
        lineHeight: '2.2em',
        textTransformation: 'none',
        LetterSpacing: '.02em',
        fontWeight: 400,
        fontStyle: 'normal',
    },


}));




const OurPeoplePage = (props) => {

    const classes = useStyles();

    const [people, setPeople] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        let name = document.getElementById("person_name").value;
		let role = document.getElementById("person_role").value;
        let profileText = document.getElementById("profile_text").value;

		let url = "/api/add_person";

		let params = {
			name: name,
			role: role,
            profileText: profileText,
            image: "dummyimage.jpg"
		}

        console.log(profileText)

		const csrftoken = Cookies.get('csrftoken');

		let headers = {
			'X-CSRFToken': csrftoken
		}

		axios.post(url, { params: params }, { headers: headers }).then(res => {
			// Success
			console.log(res)
			Cookies.set("django_csrf", res.data.csrfToken);
			// window.open("/", "_self");
            setShow(false);
		}).catch(err => {
			// Error
			console.log(err)

			if (err.response != null && (err.response.status === 403 || err.response.status === 400)) {
				setMessage("Something went wrong");
			}
		});
	}
    


    if (people == null) {
        let url = "/api/people";

        axios.get(url).then(res => {
            setPeople(res.data.people);
        });
    }

    
    let text = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    ]

    console.log(props)

    let auth = props.isAuthed;

    let loaded_people = people == null ? [] : people

    let add_button = auth ? <Button onClick={handleShow}>ADD TEAM MEMBER</Button> : null;

    

    return (
        <Box className={classes.headerContainer}>
            <div className="typeContainer">
                <TypeWords/>
            </div>
            <Box className={classes.introContainer}>
                <Box className={classes.aboutUsHeader}>
                    <Typography className={classes.aboutUsHeaderText} variant="h3" component="h3">
                        ABOUT US
                    </Typography>
                </Box>
                {text.map(textSection =>
                    <Typography className={classes.aboutUsTextSection} variant="body" component="h3">
                        {textSection}
                    </Typography>
                )}
            </Box>
            <Box className={classes.aboutUsHeader}>
                    <Typography className={classes.aboutUsHeaderText} variant="h3" component="h3">
                        OUR TEAM
                    </Typography>
                </Box>
            <Box className={classes.profilesContainer}>
                {loaded_people.map((person, index) =>
                    <MemberProfile props={person} includeDivider={index!==people.length-1}/>
                )}
            </Box>
            {add_button}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Team Member</Modal.Title>
                </Modal.Header>
                <CreateEvent/>
                <Modal.Footer>
                <Button color="primary" onClick={handleSave}>
                    Save Changes
                </Button>
                <Button color="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </Box>
	);
};

export default OurPeoplePage;
