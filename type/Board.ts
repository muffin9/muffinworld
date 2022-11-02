import { BoardValues } from '@/interfaces/Board';

export type GetBoardsType = Pick<BoardValues, 'number' | 'title' | 'createdAt'>;
export type GetBoardType = Pick<
  BoardValues,
  'number' | 'title' | 'contents' | 'createdAt'
>;

export type FormDataType = Pick<BoardValues, 'title' | 'contents'>;
