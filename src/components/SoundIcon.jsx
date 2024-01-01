import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@/styles/CommonStyles";
import { FiMusic } from "react-icons/fi";
import { BsSoundwave } from "react-icons/bs";
import { MUSIC_LABEL, MUTE_LABEL } from "@/utils/constants";

const SoundIcon = ({ iconSize }) => {
  const audioRef = useRef(new Audio("")); //TODO: add audio file
  const [music, setMusic] = useState(false);

  function playMusic(e) {
    e.preventDefault();
    let currentAudio = !music;
    setMusic(!music);

    try {
      if (currentAudio) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } catch (error) {
      console.error("Error playing/pausing audio:", error);
    }
  }

  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  return (
    <IconButton
      id="sound-icon"
      onClick={playMusic}
      isPlaying={music}
      aria-label={music ? MUTE_LABEL : MUSIC_LABEL}
    >
      {!music ? <FiMusic size={iconSize} /> : <BsSoundwave size={iconSize} />}
    </IconButton>
  );
};

export default SoundIcon;
