export const currencyFormat = (amountInCents) => {
  const amountInDollars = amountInCents * 1.0 / 100;
  return  amountInDollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}