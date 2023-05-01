/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material"
import { VideoCard } from "./"

const Videos = ({videos, direction}) => {

  return (
    <Stack direction={direction ||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((item, index) => (
        <Box key={index} >
          {item.id.videoId && <VideoCard video={item}></VideoCard> }
         
          </Box>
      ))}

    </Stack>
    
  )
}

export default Videos