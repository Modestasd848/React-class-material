import React from 'react';
import PropTypes from 'prop-types';
import style from './Song.module.css';

export default function Song(props) {
  const { title, artist, duration } = props;
  return (
    <div className={style['song-box']}>
      <p className={style.title}>{title}</p>
      <p className={style.artist}>{artist}</p>
      <p className={style.duration}>{duration}</p>
    </div>
  );
}

Song.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
