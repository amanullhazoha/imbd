import React, { Component } from "react";
import _ from 'lodash';

import Rating from "./common/rating.component";
import Table from "./common/table.component";
import getMovies from "../services/get-movies.service";
import getGenres from '../services/get-genres.service';
import Pagination from "./common/pagination.component";
import Filter from "./common/filter.component";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        activePage: 1,
        pageCount: 10,
        sorting: {path: "id", order: "asc"},
        selectFilter: "All Genres",
    };

    componentDidMount() {
        const movies = getMovies();
        const genres = ["All Genres", ...getGenres()];
        this.setState({ ...this.state, movies, genres });
    }

    handleToggleRating = (movieId) => {
        const movies = [...this.state.movies];
        const movie = movies.find((movie) => movie.id === movieId);
        movie.userRating = !movie.userRating;
        this.setState({ movies });
    };

    handleClickPage = activePage => this.setState({ ...this.state, activePage });

    handleSort = (sorting) => {
        this.setState({ ...this.state, sorting })
    }

    handleFilter = (selectFilter) => {
        this.setState({ ...this.state, selectFilter, activePage: 1 })
    }

    filterMovies = () => {
        const { movies, selectFilter } = this.state;
        const filteredMovies = movies.filter(movie => {
            if(selectFilter === "All Genres") return true;
            if(movie.genres.includes(selectFilter)) return true;
            return false;
        })

        return filteredMovies;
    }

    pagination = (movies) => {
        const { activePage, pageCount } = this.state;
        const start = (activePage - 1) * pageCount;
        return movies.slice(start, start + pageCount);
    }

    sortingMovies = (movies) => {
        const { path, order } = this.state.sorting;
        const sorted = _.orderBy(movies, [path], [order]);
        return sorted;
    }

    render() {
        const filteredMovies = this.filterMovies();
        const moviePagination = this.pagination(filteredMovies);
        const movies = this.sortingMovies(moviePagination);

        const columns = [
            {
                label: "ID",
                path: "id",
                sort: true,
                content: (movie, path) => <td>{movie[path]}</td>,
            },
            {
                label: "Rank & Title",
                path: "title",
                sort: true,
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
                label: "Duration",
                path: "runtime",
                sort: true,
                content: (movie, path) => <td>{movie[path]} min</td>,
            },
        ];

        return (
            <div className="container" id="movies">
                <div className="row">
                    <div className="col-md-10 movieTable">
                        <Table 
                            columns={columns} 
                            data={movies} 
                            sorting={this.state.sorting}
                            onSort={this.handleSort} 
                        />
                        <Pagination
                            totalItems={filteredMovies.length}
                            activePage={this.state.activePage}
                            pageCount={this.state.pageCount}
                            onClickPage={this.handleClickPage}
                        />
                    </div>
                    <Filter 
                        filterItems={this.state.genres} 
                        selectFilter={this.state.selectFilter} 
                        onClickFilter={this.handleFilter} 
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
