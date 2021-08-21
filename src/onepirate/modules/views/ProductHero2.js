import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from '../../../images/dog.jpg';
import Box from '@material-ui/core/Box';
import SelectSearch from 'react-select-search';
// import { SearchBar } from 'react-native-elements';
import { fuzzySearch } from 'react-select-search';
import '../../../searchBarStyles.css';

const optionsS = [
  {name: 'email'},
  {name: 'facebook'},
  {name: 'internet connection'},
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

const item = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  px: 5,
};

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


export default function ProductHero2() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: backgroundImage,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={ backgroundImage }
        alt="increase priority"
      />
      <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
      >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Typography color="#000000" align="center" variant="h3" marked="center">
          What do you need help with?
        </Typography>
        <Typography color="#000000" align="center" variant="h3" marked="center">
        Click on a button below to get assistance.
        </Typography>
          <Grid item xs={12} md={4}>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              href="#"
              sx={item}
            >
              Email
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              href="#"
              sx={item}
            >
              Phone
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              href="#"
              sx={item}
            >
              Tablet/iPad
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              href="#"
              sx={item}
            >
              Internet
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              href="#"
              sx={item}
            >
              Windows
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              href="#"
              sx={item}
            >
              Mac
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              href="#"
              sx={item}
            >
              Other
            </Button>
          </Grid>
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

    <SelectSearch
        options={optionsS}
        search
        filterOptions={fuzzySearch}
        emptyMessage={() => <div style={{ textAlign: 'center', fontSize: '0.8em' }}>Not found renderer</div>}
        placeholder="Click here and type in your question to search"
    />

    </ProductHeroLayout>
  );
}
