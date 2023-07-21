import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Trailer() {
  const { ytTrailerId } = useParams();

  if (!ytTrailerId) return null;

  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${ytTrailerId}`}
      width="100%"
      height="80vh"
      controls
      playing
    />
  );
}
