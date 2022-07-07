export function formatReleaseDate(releaseDate: string) {
  const date = !isNaN(Date.parse(releaseDate)) ? new Date(releaseDate) : null;
  if (date !== null) {
    return date.toLocaleDateString('en-uk', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } else {
    return 'Not available';
  }
}

export function formatRuntime(runtime: number | null) {
  if (runtime === null) return 'Not available';

  if (runtime < 60) {
    return `${runtime}m`;
  } else {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes ? ` ${minutes}m` : ''}`;
  }
}
