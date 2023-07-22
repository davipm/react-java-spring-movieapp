import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MovieCarouselContainer = styled.div`
  width: 100vw;
  background-color: black;
`;

export const MovieCardContainer = styled.div`
  height: 550px;
  background-color: black;
`;

export const MovieCard = styled.div<{ img: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom,
      rgb(0 0 0 / 0%),
      rgb(0 0 0 / 100%)
    ),
    url("${(p) => p.img}");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MovieDetails = styled.div`
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (width <= 800px) {
    top: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

export const MoviePoster = styled.div`
  height: 300px;
  overflow: hidden;
  border: 1px solid gold;
  border-radius: 10px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const MovieButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

export const PlayButtonIconContainer = styled.div`
  width: 150px;
  padding: 0;
  margin: 0;
`;

export const PLayButtonIcon = styled(FontAwesomeIcon)`
  padding: 0;
  margin: 0;
  font-size: 3rem;
  color: gold;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    font-size: 4rem;
    color: white;
  }
`;
