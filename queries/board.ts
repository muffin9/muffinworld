import { gql } from '@apollo/client';

export const GET_BOARDS = gql`
  query FetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
      like
      createdAt
    }
  }
`;
