import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items))}, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #0ED2E4",
          px: { sx: 0, md: 2 },
        }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}></Sidebar>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}>
          Copyright devKaliper
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{ color: "#fff", marginLeft: 2 }}>
          {selectedCategory} <span style={{ color: "#0ED2E4" }}>Videos</span>
        </Typography>

        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
