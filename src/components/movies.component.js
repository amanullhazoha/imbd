import React, { Component } from "react";
import Rating from "./common/rating.component";
import Table from "./common/table.component";

class Movies extends Component {
    state = {
        movies: [
            {
                id: 1, 
                name: "The Shawshank Redemption (1994)",
                imdbRating: 9.2,
                userRating: null,
                bookmark: false,
            },
            {
                id: 2,
                name: "The Godfather (1972)",
                imdbRating: 9.1,
                userRating: true,
                bookmark: false,
            },
            {
                id: 3,
                name: "The Godfather: Part II (1974)",
                imdbRating: 9.1,
                userRating: false,
                bookmark: false,
            },
            {
                id: 4,
                name: "The Dark Knight (2008)",
                imdbRating: 9.0,
                userRating: true,
                bookmark: false,
            },
            {
                id: 5,
                name: "12 Angry Men (1957)",
                imdbRating: 8.9,
                userRating: false,
                bookmark: false,
            },
        ],
    };

    handleToggleRating = movieId => {
        const movies = [...this.state.movies];
        const movie = movies.find(movie => movie.id === movieId);
        movie.userRating = !(movie.userRating);
        this.setState({ movies })
    }

    render() {
        const columns = [
            {label: "ID", path: "id", content: (movie, path) => <td>{movie[path]}</td>},
            {label: "Rank & Title", path: "name", content: (movie, path) => <td>{movie[path]}</td>},
            {label: "IMDb Rating", path: "imdbRating", content: (movie, path) => <td>{movie[path]}</td>},
            {label: "Your Rating", path: "userRating", content: (movie, path) => <td><Rating isRated={movie[path]} handleRating={this.handleToggleRating} id={movie.id} /></td>},
            {label: "", path: "bookmark", content: (movie, path) => <td>{movie[path]}</td>},
        ];

        return (
            <>
                <Table columns={columns} data={this.state.movies} />
            </>
        );
    }
}

export default Movies;
