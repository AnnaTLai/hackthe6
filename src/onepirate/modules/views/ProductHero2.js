import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import MicIcon from '@material-ui/icons/Mic';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Box from '@material-ui/core/Box';
import SelectSearch from 'react-select-search';
// import { SearchBar } from 'react-native-elements';
import { fuzzySearch } from 'react-select-search';
import '../../../searchBarStyles.css';
import useSpeechToText from 'react-hook-speech-to-text';
import { RestaurantOutlined } from '@material-ui/icons';

const backgroundImage =
    'https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_960_720.png';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    },
    roundButton: {
      width: '300px',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      height: '50px',
      // fontSize:'20px',
      left: '39%',
      marginTop: '8%',
      position: 'relative',
      color: 'black',
    },
    roundButton2: {
      marginTop: '4%',
      // width: '50px',
      height: '50px',
      backgroundColor: '#8cc3cb',
      borderRadius: 10,
      // fontSize:'20px',
      left: '30%',
      position: 'relative',
      color: 'black',
      margin: theme.spacing(1),
      paddingTop: theme.spacing(2),
    },
    roundButton3: {
      marginTop: '8%',
      // width: '50px',
      height: '50px',
      backgroundColor: '#8cc3cb',
      borderRadius: 10,
      // fontSize:'20px',
      left: '40%',
      position: 'relative',
      color: 'black',
      margin: theme.spacing(1),
      paddingTop: theme.spacing(2),
    },
    button: {
        // display: 'flex',
        marginTop: '5%',
        minWidth: 200,
        backgroundColor: '#8cc3cb',
        fontSize:'20px',
        borderRadius: 50,
        flexDirection: 'row',
        color: 'black',
        margin: theme.spacing(2),
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    root: {
      display: 'flex',
      overflow: 'hidden',
      backgroundColor: theme.palette.secondary.light,
    },
    container: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(30),
      flexDirection: 'column',
      justifyContent: 'space-between',
      display: 'flex',
      position: 'relative',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(0, 5),
    },
    image: {
      height: 55,
    },
    box: {
      display: 'flex', 
      // overflow: 'hidden', 
      // color: 'secondary.light',
      flexDirection: 'row',
      // justifyContent: 'space-between',
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
    },
    grid: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

const optionsS = [
  {name: 'email'},
  {name: 'facebook'},
  {name: 'internet connection'},
  {name: 'smart phone'},
  {name: 'text messaging'},
];

// const [data, setData] = useState(optionsS);
// const [query, setQuery] = useState('');
// const [options, setOptions] = useState([]);

// const styles = StyleSheet.create({
//   flatList:{
//       paddingLeft: 15, 
//       marginTop:15, 
//       paddingBottom:15,
//       fontSize: 20,
//       borderBottomColor: '#26a69a',
//       borderBottomWidth:1
//   }
// });

// const updateQuery = (input) => {
//   setQuery(input);
//   console.log(query);
//   setOptions(data.slice());
// }

// const filterNames = (option) => {
//   // 1.
//   let search = query.toLowerCase(); 
//   //2.
//   if(option.name.startsWith(search, 0)){
//      //3.
//      return option;
//   }else{ 
//      //4.
//      options.splice(options.indexOf(option), 1);
//      return null;
//   }
// }


function ProductHero2(props) {
  const { classes } = props;

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    crossBrowser: true,
    googleApiKey: 'AIzaSyDzonwNYuQYOHED2FmGF3nP2gqibCE44-4',
    useLegacyResults: false
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  
  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <Box
      className={classes.box}
      >
      <Container className={classes.container}>
        <Typography color="inherit" align="center" variant="h3">
          How can we help you today?
        </Typography>
        <Typography color="inherit" align="center" variant="h4">
        Click one of the buttons below, or search by text or voice to get assistance.
        </Typography>
          <Grid className={classes.grid} xs={12} md={4} >
            <Button
              className={classes.button}
              component="a"
              href="#"
            >
              Email
            </Button>
            <Button
              className={classes.button}
              component="a"
              href="#"
            >
              Phone
            </Button>
            <Button
              className={classes.button}
              component="a"
              href="#"
            >
              Tablet/iPad
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              component="a"
              href="#"
            >
              Internet
            </Button>
            <Button
              className={classes.button}
              component="a"
              href="#"
            >
              Windows
            </Button>
            <Button
              className={classes.button}
              component="a"
              href="#"
            >
              Mac
            </Button>
            <Button
              className={classes.button}
              component="a"
              href="#"
            >
              Other
            </Button>
          </Grid>
          <Container className={classes.box}>
            <SelectSearch
                options={optionsS}
                search
                filterOptions={fuzzySearch}
                placeholder="Click here and type in your question to search"
            />
            <Button
                className={classes.roundButton2}
                component="a"
                href="#"
              >
                Go
            </Button>
          </Container>
          <div>
          <Container className={classes.box}>
            <Button
                className={classes.roundButton}
                variant="contained"
                onClick={isRecording ? stopSpeechToText : startSpeechToText}
            >
              <Container className={classes.box}>
                <MicIcon size="x-large"/>
                {isRecording ? 'Stop Recording' : 'Say Your Question'}
              </Container>
            </Button>
            <Button
                className={classes.roundButton3}
                component="a"
                href="#"
              >
                Go
            </Button>
            </Container>
            {/* <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button> */}
            <ul>
              {isRecording ? interimResult && <li>{interimResult}</li> : results.length == 0 ? "" : results[results.length - 1].transcript}
            </ul>
          </div>
          {/* <Button
              className={classes.roundButton}
              variant="contained"
              component="a"
              href="#"
          >
            <Container className={classes.box}>
              <MicIcon size="x-large"/>
              Say Your Question
            </Container>
          </Button> */}
      </Container>
    </Box>
    {/* <SearchBar
      onChangeText={updateQuery}
      value={query}   
      placeholder="Click here and type in your question to search"
    />

    <FlatList data={options} keyExtractor = {(i)=>i.name.toString()}
      extraData = {query} 
      renderItem = {({item}) =>
        <Text style={styles.flatList}>{filterNames(item)}
        </Text>} 
    /> */}

    </ProductHeroLayout>
  );
}

ProductHero2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero2);
