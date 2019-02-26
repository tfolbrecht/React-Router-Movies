import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
export default class SavedList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            to={`/movies/${movie.id}`}
            style={{
              textDecoration: 'none',
              color: 'black'
            }}>
            <span key={movie.id} className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <Link to={'/'} >
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}