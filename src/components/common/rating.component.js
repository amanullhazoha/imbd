import React, { Component } from 'react';

class Rating extends Component {
    state = {
        isHovered: false,
    }

    handleHover = () => this.setState({ isHovered: true })

    handleOut = () => this.setState({ isHovered: false });

    getClassName = () => {
        const { isRated } = this.props;
        const { isHovered } = this.state;
        let className = isRated ? 'bi bi-star-fill' : 'bi bi-star';
        className += isHovered ? ' text-primary' : '';
        return className;
    }

    render() { 
        const { handleRating, id } = this.props;

        return (
            <i 
                onMouseOver={this.handleHover} 
                onMouseOut={this.handleOut} 
                onClick={() => handleRating(id)}
                className={this.getClassName()} 
            />
        );
    }
}
 
export default Rating;
