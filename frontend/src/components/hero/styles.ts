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
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    ),
    url("${(p) => p.img}");
`;

export const MovieDetails = styled.div`
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    top: 20px;
  }
`;

export const MoviePoster = styled.div`
  height: 300px;
  border: 1px solid gold;
  border-radius: 10px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const MovieTitle = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

export const MovieButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const PlayButtonIconContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 150px;
`;

export const PLayButtonIcon = styled(FontAwesomeIcon)`
  padding: 0;
  margin: 0;
  color: gold;
  font-size: 3rem;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    font-size: 4rem;
    color: white;
  }
`;
