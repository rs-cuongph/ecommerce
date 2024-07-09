export function formatNumberWithCommas(number: number ): string {
  const numStr = Math.abs(number).toString();
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return numStr.replace(regex, '.');
}
