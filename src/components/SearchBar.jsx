import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navegate = useNavigate()

  function handleSumbit(e) {
    e.preventDefault()
    if (searchTerm){
      navegate(`/search/${searchTerm}`)
      setSearchTerm("")

    }
  }

  return (
    <Paper component="form" sx={{ borderRadius:20, border:"1px solid #909090", pl:2, boxShadow:"none", mr: {sm: 5}}}
    onSubmit={handleSumbit}>
        <input className="onSearch_Bar" placeholder="Search Videos..." value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}} />
        <IconButton type="submit" sx={{p:"10px", color:"#0ED2E4"}}>
            <Search></Search>
        </IconButton>
 
    </Paper>
  )
}

export default SearchBar