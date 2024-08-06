export const convertDataSheet = (dataRaw: any[]) => {
  if (!dataRaw) return;
  const result = dataRaw.slice(1).map((row: any) => ({
    name: row[0],
    id: row[1],
    warranty: row[2],
    original_price: row[3],
    discounted_price: row[4],
    image_url: row[5],
  }));

  return result;
}
