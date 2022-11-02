import { gql } from '@apollo/client';

export const GET_BOARDS = gql`
  query FetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      title
      createdAt
    }
  }
`;

export const GET_BOARD = gql`
  query FetchBoard($number: Int) {
    fetchBoard(number: $number) {
      title
      contents
      createdAt
    }
  }
`;

export const POST_BOARD = gql`
  mutation CreateBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;
