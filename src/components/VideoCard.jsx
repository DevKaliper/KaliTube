import {Link } from 'react-router-dom'
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material'

import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from '../utils/constans'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {

  return (
   <Card sx={{width:{ xs:"100%", sm:"358px", md:"320px" }, boxShadow:"none", borderRadius:"10px"}}>
    <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url}
    alt={snippet?.title}
    sx={{width:{xs:"100%", sm:"358px", md:"320px"}, height:180}}
    

    
    >

    </CardMedia>
    <CardContent sx={{backgroundColor:"#1e1e1e", height:"80px"}}>
    <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
    </Typography>
    </Link>
        
    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
    <Typography variant='subtitle2' fontWeight="bold" color="gray" >
    {snippet?.channelTitle || demoChannelTitle}
    <CheckCircle sx={{fontSize:12, color:"gray", ml:"5px"}}></CheckCircle>
    </Typography>
    </Link>
        
        </CardContent>
    </Link>
   </Card>
  )
}

export default VideoCard