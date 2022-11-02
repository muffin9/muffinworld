import {
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client';

export const useRequestQuery = (
  query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
  params: any
) => {
  const { loading, error, data } = useQuery(query, params);

  if (loading) return <p>Loading...</p>;

  if (error) {
    return <p>Error :(</p>;
  }

  return data;
};
