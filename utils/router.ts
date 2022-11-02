export const currentPath = (pathname: string) => {
  const paths = pathname.split('/');
  return paths[paths.length - 1];
};
