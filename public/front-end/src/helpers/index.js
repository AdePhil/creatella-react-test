export const currencyFormatter = (amountInCents) => {
  const amountInDollars = amountInCents * 1.0 / 100;
  return  amountInDollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}

export const dateFormatter = (dateString) => {
  const dateProductWasAdded = new Date(dateString);
  const today = new Date();
  const timeDifference = today.getTime() - dateProductWasAdded.getTime();
  const daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));
  if(daysDifference === 0) {
    return `Today`;
  }
  if(daysDifference > 7 ){
    return defaultDateFormatter(dateString);
  }
  return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
}

export const defaultDateFormatter = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const date = new Date(dateString);
  let formattedDate = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  return formattedDate;
}