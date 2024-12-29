export const utlsSplitPrice = (price: string | number) => {
  // Converte il prezzo in stringa
  const priceString = typeof price === "number" ? price.toFixed(2) : price;

  // Usa regex per dividere il valore:
  // 1. Parte numerica
  // 2. Simboli di valuta
  // 3. Annotazioni tra parentesi
  const match = priceString.match(/^(\d+)([.,](\d+))?\s*([^(\d.,]+)?\s*(\((.*)\))?$/);

  const integerPart = match?.[1] || "0"; // Parte intera (default "0")
  const decimalPart = match?.[3] || "00"; // Parte decimale (default "00")
  const currency = match?.[4]?.trim() || ""; // Valuta o simboli
  const annotation = match?.[6]?.trim() || ""; // Annotazioni tra parentesi

  return { integerPart, decimalPart, currency, annotation };
};
