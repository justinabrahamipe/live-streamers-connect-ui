export default function getRelativeTimeString(givenDateStr: string): string {
  const givenDate = new Date(givenDateStr);
  const currentTime = new Date();
  const timeDifference = Math.abs(currentTime.getTime() - givenDate.getTime());

  if (timeDifference < 60 * 1000) {
    return `${Math.floor(timeDifference / 1000)} seconds ago`;
  } else if (timeDifference < 60 * 60 * 1000) {
    const minutes = Math.floor(timeDifference / (60 * 1000));
    return `${minutes} minutes ago`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    return `${days} days ago`;
  }
}
