import React, { useEffect, useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");
    const HandleChange = (e) => {
        setSearch(e.target.value);
    };
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const url =
                "https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies";
            const options = {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "19b3607b68msh69cabfac46cfcc1p19dbcdjsn9cb627000c0f",
                    "x-rapidapi-host": "imdb236.p.rapidapi.com",
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setMovies(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const searchMovies = movies.filter((movie) => movie.primaryTitle == search);
    console.log(searchMovies);
    return (
        <div className="flex flex-col justify-center items-center m-9">
            <input
                type="text"
                placeholder="Search Movies..."
                className="w-[500px] h-[40px] border-4 border-white rounded-2xl pl-3"
                value={search}
                onChange={HandleChange}
            />
            <div>
                {searchMovies.length > 0
                    ? searchMovies.map((movie) => {
                          return (
                              <div className=" border-2 border-black p-7 flex flex-col justify-center items-center h-[350px] w-[200px]">
                                  <h1>Hello</h1>
                                  <a href={movie.url} target="_blank">
                                      <img
                                          src={movie.primaryImage}
                                          className=""
                                      />{" "}
                                      <p>
                                          {movie.primaryTitle} |{" "}
                                          {movie.startYear}
                                      </p>
                                  </a>
                              </div>
                          );
                      })
                    : // <h1>{searchMovies.primaryTitle}</h1>
                      ""}
            </div>
        </div>
    );
};

export default Search;
