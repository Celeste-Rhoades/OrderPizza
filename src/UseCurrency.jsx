const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Usecurrency(price) {
  return intl.format(price);
}

export const priceCoverter = (price) => intl.format(price);
