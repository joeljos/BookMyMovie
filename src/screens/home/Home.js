import React, { useState } from 'react'
import Header from '../../common/header/Header'
import '../home/Home.css'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import antmanimage from '../../assets/moviePosters/antman.jpeg'
import spidermanimage from '../../assets/moviePosters/spiderman.jpg'

let sampleUpcomingMovies = [
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
      poster_url: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    }

]
let sampleReleasedMovies = [
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  },
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  },
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  },
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  },
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  },
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  },
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  },
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  },
  {
    poster_url: spidermanimage,
      title: 'SpiderMan',
      author: 'Marvel'
  }

]



const useStyles1 = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.background.paper
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
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
      flexWrap: 'wrap',
      backgroundColor: theme.palette.background.paper
    },
    imageList: {
      flexWrap: 'wrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
    },
    title: {
      color: "white",
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));  

function Home() {
  let [itemData1,setitemData1] = useState(sampleUpcomingMovies);
  let [itemData2,setitemData2] = useState(sampleReleasedMovies);
    const classes1 = useStyles1();
    const classes2 = useStyles2();
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
                  <img src={item.poster_url} alt={item.title} />
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
              <h1> Movie Filter</h1>        
        </div>
        </div>
      </div>
    )
}

export default Home
