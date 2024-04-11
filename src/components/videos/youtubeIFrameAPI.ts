import { SyntheticEvent } from "react";

const YT = window.YT;

export const onPlayerStateChange = (event: SyntheticEvent) => {
  let done = false;
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
  return done;
};
export const stopVideo = (player) => {
  player.stopVideo();
};
