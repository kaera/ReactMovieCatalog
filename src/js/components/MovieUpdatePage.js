import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as movieActions from '../actions/movieActions';
import MovieForm from "./MovieForm";

class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    submitMovie(movie) {
        this.props.createMovie(movie);
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {
        const movie = this.props.movies.find(item => item.id == this.props.match.params.id);
        return(
            <div>
                <h1>Movie adding</h1>
                <div className="row">
                    <MovieForm submitMovie={this.submitMovie.bind(this)} movie={movie} />
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createMovie: movie => dispatch(movieActions.createMovie(movie))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);