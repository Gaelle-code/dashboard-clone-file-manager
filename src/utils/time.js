export function formatCreatedOn(value) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

export function formatRelativeTime(value, referenceDate = new Date()) {
  const timestamp = new Date(value).getTime();
  const reference = referenceDate.getTime();
  const differenceInMinutes = Math.max(0, Math.floor((reference - timestamp) / 60000));

  if (differenceInMinutes < 1) {
    return 'Opened just now';
  }

  if (differenceInMinutes < 60) {
    return `Opened ${differenceInMinutes} min${differenceInMinutes === 1 ? '' : 's'} ago`;
  }

  const differenceInHours = Math.floor(differenceInMinutes / 60);
  if (differenceInHours < 24) {
    return `Opened ${differenceInHours} hr${differenceInHours === 1 ? '' : 's'} ago`;
  }

  const differenceInDays = Math.floor(differenceInHours / 24);
  if (differenceInDays < 7) {
    return `Opened ${differenceInDays} day${differenceInDays === 1 ? '' : 's'} ago`;
  }

  const differenceInWeeks = Math.floor(differenceInDays / 7);
  if (differenceInWeeks < 5) {
    return `Opened ${differenceInWeeks} week${differenceInWeeks === 1 ? '' : 's'} ago`;
  }

  const differenceInMonths = Math.floor(differenceInDays / 30);
  if (differenceInMonths < 12) {
    return `Opened ${differenceInMonths} month${differenceInMonths === 1 ? '' : 's'} ago`;
  }

  const differenceInYears = Math.floor(differenceInDays / 365);
  return `Opened ${differenceInYears} year${differenceInYears === 1 ? '' : 's'} ago`;
}
