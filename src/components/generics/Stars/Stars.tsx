import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Stars.scss';

const STARS_LENGTH = 5;

const Stars = ({ rating, className }: IStarsProps): JSX.Element => (
  <ul className={classNames('stars', className)}>
    {[...Array(STARS_LENGTH)].map((star, index) => {
      const realIndex = index + 1;
      return (
        <li key={`star-${realIndex}`} className={realIndex <= rating ? 'on' : 'off'}>
          <span className="star">&#9733;</span>
        </li>
      );
    })}
  </ul>
);

Stars.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
};

Stars.defaultProps = {
  className: null,
  rating: 0,
};

interface IStarsProps {
  className: string;
  rating: number;
}

export default Stars;
