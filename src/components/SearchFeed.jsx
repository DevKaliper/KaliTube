import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "./";


import { fetchFromAPI } from "../utils/fetchFromAPI";



const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
        sx={{ color: "#fff", marginLeft: 2 }}>
        Search Results for: <span style={{ color: "#0ED2E4" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos}></Videos>
    </Box>
  );
};

export default SearchFeed;
