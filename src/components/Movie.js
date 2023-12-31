import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 380px;
  width: 100%;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export default ({ id, bg, isLiked }) => {
    const [toogleLikeMovie] = useMutation(LIKE_MOVIE, {
        variables: { id: parseInt(id), isLiked },
    });
    return (
      <Container>
        <Link to={`/${id}`}>
          <Poster bg={bg} />
        </Link>
        <button onClick={toogleLikeMovie}>
          {isLiked ? "Не нравится" : "Понравилось"}
        </button>
      </Container>
    );
  };