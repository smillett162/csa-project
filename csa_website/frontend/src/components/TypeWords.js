import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	
    typingWords: {
		fontFamily: 'Lucida Console',
        fontSize: '30px',
        //position: 'absolute', 
        // top: '50%', 
        // left: '50%'
        margin: 'auto'
	},
    typingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));




const TypeWords = (props) => {

    const classes = useStyles();

    const words = ["Making the Con a better place", "Music is amazing"];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true); 

    // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && !reverse ) {
      setReverse(true);
      return;
    }
    // &&  index !== words.length - 1 
    if (subIndex === 0 && reverse) {
      setReverse(false);
      if (index + 1 === words.length){
        setIndex(0)
      } else {
        setIndex((prev) => prev + 1);
      }
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? parseInt(Math.max(75, Math.random() * 350)*0.6) : Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);


    return (
        <Box className={classes.typingContainer}>
            <Typography variant="h1" component="h2" className={classes.typingWords} gutterBottom>
                {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
            </Typography>
        </Box>
	);
};

export default TypeWords;
