import { useQuery } from '@apollo/client';

import { BoardReturn } from '@/interfaces/IBoard';
import { GET_BOARDS } from '@/queries/board';

const Boards = () => {
  const { loading, error, data } = useQuery(GET_BOARDS, {
    variables: {
      page: 1,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error :(</p>;
  }

  return data.fetchBoards.map((board: BoardReturn) => (
    <div key={board.number}>
      <h3>{board.writer}</h3>
      <h1>{board.title}</h1>
      <br />
      <p>{board.contents}</p>
      <span>{board.like}</span>
      <span>{board.createdAt}</span>
      <br />
    </div>
  ));
};

export default Boards;
