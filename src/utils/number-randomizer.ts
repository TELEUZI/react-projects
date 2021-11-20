export default function getRandomNumber() {
  return parseInt((Math.random() * 0xffffff).toFixed().slice(3), 10);
}
