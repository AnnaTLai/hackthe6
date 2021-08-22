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
      // fontSize:'20px',
      left: '39%',
      marginTop: '5%',
      position: 'relative',
      color: 'black',
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
      // display: 'flex', 
      // overflow: 'hidden', 
      // color: 'secondary.light',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
          <SelectSearch
              options={optionsS}
              search
              filterOptions={fuzzySearch}
              placeholder="Click here and type in your question to search"
          />
          <Button
              className={classes.roundButton}
              variant="contained"
              component="a"
              href="#"
          >
            <Container className={classes.box}>
              <MicIcon size="x-large"/>
              Say Your Question
            </Container>
          </Button>
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
