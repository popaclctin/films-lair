export function getGenreName(
  genreList: { id: number; name: string }[],
  id: number
) {
  const foundGenre = genreList.find((genre) => genre.id === id);
  return foundGenre?.name;
}
