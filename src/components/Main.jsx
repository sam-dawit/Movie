import React, { useState } from "react";
import Login from "./Login";
import MovieCarousal from "./MovieCarousal";
import MovieList from "./MovieList";
import TvSeries from "./TvSeries";
import Search from "./Search";

// Section 1
// Section 2
// Section 3
const Main = () => {
    // const [search, setSearch] = useState("");
    // const HandleChange = (e) => {
    //     setSearch(e.target.value);
    // };
    return (
        <div>
            <Search />
            <MovieCarousal />
            <MovieList />
            <TvSeries />
        </div>
    );
};

export default Main;
