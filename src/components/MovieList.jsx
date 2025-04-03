import React, { useEffect, useState } from "react";
import MovieCarousal from "./MovieCarousal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const MovieList = () => {
    const movie_url = import.meta.env.VITE_API_URL_MOVIE;
    const movie_key = import.meta.env.VITE_API_KEY;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const url = movie_url;
            const options = {
                method: "GET",
                headers: {
                    "x-rapidapi-key": movie_key,
                    "x-rapidapi-host": "imdb236.p.rapidapi.com",
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                // console.log(result);
                setMovies(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const latest = movies.filter((movie) => movie.startYear >= 2020);
    const series = movies.filter((movie) => movie.type != "movie");
    // console.log(series);
    console.log(movies);
    // console.log(latest);
    return (
        <>
            <div className="trending">
                <h1 className=" text-4xl ml-7">Latest Movies</h1>
                <h1 className=" text-white">....</h1>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={5}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {latest.slice(0, 15).map((movie) => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <div className=" border-2 border-black p-7 flex flex-col justify-center items-center h-[350px] w-[200px]">
                                    <a href={movie.url} target="_blank">
                                        <img src={movie.primaryImage} />{" "}
                                        <p>
                                            {movie.originalTitle} |{" "}
                                            {movie.startYear}
                                        </p>
                                    </a>
                                </div>
                            </SwiperSlide>
                        );
                    })}{" "}
                </Swiper>
            </div>
        </>
    );
};

export default MovieList;
