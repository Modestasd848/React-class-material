import React, { useRef } from 'react';
import AudioSource from '../AudioSource/AudioSource';

export default function AudioControlls() {
  const songPath = `${process.env.PUBLIC_URL}/audio/♛2Pac_✞_All_Eyez_on_Me🥀♛_Gangsta_Remix_2023__.mp3`;

  const audioRef = useRef(null);
  return (
    <div>
      <AudioSource source={songPath} ref={audioRef} />
      <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => audioRef.current.pause()}>Pause</button>
    </div>
  );
}
