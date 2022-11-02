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
      number
      title
      contents
      createdAt
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation CreateBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation UpdateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      number
      message
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation DeleteBoard($number: Int) {
    deleteBoard(number: $number) {
      number
      message
    }
  }
`;
