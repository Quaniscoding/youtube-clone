import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Icon, colors } from "@mui/material";
import { Search } from "@mui/icons-material";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`);
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        style={{ padding: "10px", color: "red" }}
        sx={{ p: "10px", colors: "red" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
