import React, { useState, useEffect, useContext, createContext } from 'react'
import Header from '../../common/header/Header'
import '../home/Home.css'
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import antmanimage from '../../assets/moviePosters/antman.jpeg'
import spidermanimage from '../../assets/moviePosters/spiderman.jpg'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MenuItem, Select, FormControl, InputLabel, Input } from '@material-ui/core';


let sampleUpcomingMovies = [

]
let sampleReleasedMovies = [

]


var newVar = null;
async function getData() {
  await fetch('http://localhost:8085/api/v1/movies?page=1&limit=20')
    .then(response => response.json())
    .then(data => {
      newVar = data
    })
}

function Home() {
  let [itemData1, setitemData1] = useState(sampleUpcomingMovies);
  let [itemData2, setitemData2] = useState(sampleReleasedMovies);
  let [dbdata,setDbdata] = useState(false)
  const [genre, setGenre] = useState('');

  const theme = useTheme();
  const useStyles1 = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    imageList: {
      flexWrap: 'nowrap'
    },
    title: {
      color: "white",
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

  const useStyles2 = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    imageList: {
      flexWrap: 'wrap'
    },
    imageListItem: {
      cursor: 'pointer'
    },
    title: {
      color: "white",
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));
  const s1 = theme.spacing(1);
  const useStylesCard = makeStyles({
    root: {
      minWidth: 300,
      maxWidth: 300,
    },
    elements: {
      minWidth: 240,
      maxWidth: 240,
      margin: s1,
    },
    title: {
      minWidth: 240,
      maxWidth: 240,
      color: theme.palette.primary.light,
    },
  });

  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStylesCard();


  useEffect(()=>{
    getData().then(()=>{setDbdata(newVar?newVar:false)})
  },[])

  if (dbdata) {

    let movieData = dbdata.movies
    console.log("moviedata",movieData)
    movieData.forEach((item) => {
      if (item.status == "PUBLISHED") {
        sampleUpcomingMovies.push(item)
      }
      else if (item.status == "RELEASED") {
        sampleReleasedMovies.push(item)
      }
    })
    
    const handleChange = (event) => {
      setGenre(event.target.value);
    };

    return (
      <div>
        <Header></Header>
        <div className="upcomingDiv">
          <label>
            Upcoming Movies
          </label>
        </div>
        <div className="upcomingmoviegridDiv">
          <div className={classes1.root}>
            <ImageList rowHeight={250} className={classes1.imageList} cols={6}>
              {itemData1.map((item) => (
                <ImageListItem key={item.poster_url}>
                  <img src={item.poster_url} alt={item.title} />
                  <ImageListItemBar
                    title={item.title}
                    classes={{
                      root: classes1.titleBar,
                      title: classes1.title,
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        <div className="homebodyDiv">
          <div className="releasedmoviegridDiv">
            <div className={classes2.root}>
              <ImageList rowHeight={350} className={classes2.imageList} cols={4} gap={20}>
                {itemData2.map((item) => (
                  <ImageListItem key={item.poster_url}>
                    <img className={classes2.imageListItem} src={item.poster_url} alt={item.title} />
                    <ImageListItemBar
                      title={item.title}
                      classes={{
                        root: classes2.titleBar,
                        title: classes2.title,
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
          <div className="moviefilterDiv">

            <Card variant="outlined" className={classes3.root}>
              <CardContent className={classes3.elements}>
                <Typography className={classes3.title}>
                  FIND MOVIES BY:
                </Typography>
                <FormControl>
                  <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
                  <Input id="movie-name" aria-describedby="movie-name" />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="genres">Genres</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={genre}
                    onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <Input id="genres" aria-describedby="genres" />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="artists">Artists</InputLabel>
                  <Input id="artists" aria-describedby="artists" />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="release-date-start">Release Date Start</InputLabel>
                  <Input id="release-date-start" aria-describedby="release-date-start" />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="release-date-end">Release Date End</InputLabel>
                  <Input id="release-date-end" aria-describedby="release-date-end" />
                </FormControl>
              </CardContent>
              <CardActions className={classes3.elements}>
                <Button className={classes3.elements} variant="contained" color="primary" >APPLY</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
  else {
    return null
  }

}

export default Home
