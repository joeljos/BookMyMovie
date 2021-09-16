import React from 'react'
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

let itemData = [
    {
        img: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
        img: spidermanimage,
        title: 'SpiderMan',
        author: 'Marvel'
    },
    {
        img: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
        img: spidermanimage,
        title: 'SpiderMan',
        author: 'Marvel'
    },
    {
        img: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
        img: spidermanimage,
        title: 'SpiderMan',
        author: 'Marvel'
    },
    {
        img: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    },
    {
        img: spidermanimage,
        title: 'SpiderMan',
        author: 'Marvel'
    },
    {
        img: antmanimage,
        title: 'AntMan',
        author: 'Marvel'
    }

]

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
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
    const classes = useStyles();
    return (
        <div>
            <Header></Header>
            <div className="upcomingDiv">
                <label>
                    Upcoming Movies
                </label>
            </div>
            <div className="moviegridDiv">
            <div className={classes.root}>
      <ImageList collHeight={250} className={classes.imageList} cols={6}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              /*actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }*/
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
            </div>
        </div>
    )
}

export default Home
