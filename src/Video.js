import video1 from "./Video/pexels-jess-vide-5230200.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return <video ref={videoRef} src={video1} width={500} />;
}

export default forwardRef(Video);
