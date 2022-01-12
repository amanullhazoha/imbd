import React, { Component } from "react";
import Rating from "./common/rating.component";
import Table from "./common/table.component";
import getMovies from "../services/get-movies.service";

class Movies extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        const movies = getMovies();
        this.setState({ movies });
    }

    handleToggleRating = (movieId) => {
        const movies = [...this.state.movies];
        const movie = movies.find((movie) => movie.id === movieId);
        movie.userRating = !movie.userRating;
        this.setState({ movies });
    };

    render() {
        const columns = [
            {
                label: "ID",
                path: "id",
                content: (movie, path) => <td>{movie[path]}</td>,
            },
            {
                label: "Rank & Title",
                path: "title",
                content: (movie, path) => <td>{movie[path]}</td>,
            },
            {
                label: "Poster",
                path: "posterUrl",
                content: (movie, path) => (
                    <td>
                        <img
                            src={movie[path]}
                            alt={movie.id}
                            style={{ width: "auto", height: "100px" }}
                        />
                    </td>
                ),
            },
            {
                label: "Your Rating",
                path: "userRating",
                content: (movie, path) => (
                    <td>
                        <Rating
                            isRated={movie[path]}
                            handleRating={this.handleToggleRating}
                            id={movie.id}
                        />
                    </td>
                ),
            },
            {
                label: "",
                path: "bookmark",
                content: (movie, path) => <td>{movie[path]}</td>,
            },
        ];

        return (
            <>
                <Table columns={columns} data={this.state.movies} />
            </>
        );
    }
}

export default Movies;
