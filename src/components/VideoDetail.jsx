import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"
import ReactPlayer from "react-player"
import {Box, Typography, Stack} from '@mui/material'
import { CheckCircle } from "@mui/icons-material"

import {Videos} from './'
import {fetchFromAPI} from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [VideoDetails, setVideoDetails] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>{setVideoDetails(data.items[0])})

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>{setRelatedVideos(data.items)})
    

  }, [id])



  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:"column", md:"row"}}>
        <Box flex={1}>
          <Box sx={{width:"100%", positon:"sticky", top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls={true} />
            <Typography variant="h5" sx={{fontWeight:"bold", mt:2 , color:"#fff" , ml:2}}>{VideoDetails?.snippet.title}</Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} p={1} px={2}>
              <Typography variant={{sm:"subtitle1", md:"h6"}} color="#fff">
                {VideoDetails?.snippet.channelTitle}
                <CheckCircle sx={{fontSize:"12px", color:"gray", ml:"5px"}}/>
              </Typography>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{opacity:.7}}>
                  {parseInt(VideoDetails?.statistics.viewCount).toLocaleString()} views </Typography>
                <Typography variant="body1" sx={{opacity:.7}}> {parseInt(VideoDetails?.statistics.likeCount).toLocaleString()} likes</Typography>
                  
                 
              </Stack>
              

            </Stack>

          </Box>

        </Box>

      </Stack>
      <Box px={2} py={{md:1, xs:5}} justifyContent="center" alignItems="center">

        <Videos videos={relatedVideos} />

      </Box>

    </Box>
  )
}

export default VideoDetail