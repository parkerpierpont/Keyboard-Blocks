const lastRow = "{symbol} {space} {enter}";

export const createUppercase = (shift: string[]): string[] => {
  const row1 = shift[1]
    .split(" ")
    .slice(1, 11)
    .join(" ");
  const row2 = shift[2]
    .split(" ")
    .slice(1, 10)
    .join(" ");
  const row3 = [
    ...shift[3].split(" ").slice(0, 1), // shift
    ...shift[3].split(" ").slice(1, 8),
    ...shift[0]
      .split(" ")
      .slice(shift[0].split(" ").length - 1, shift[0].split(" ").length) // bksp
  ].join(" ");
  return [row1, row2, row3, lastRow];
};

export const createLowercase = (base: string[]): string[] => {
  const row1 = base[1]
    .split(" ")
    .slice(1, 11)
    .join(" ");
  const row2 = base[2]
    .split(" ")
    .slice(1, 10)
    .join(" ");
  const row3 = [
    ...base[3].split(" ").slice(0, 1), // shift
    ...base[3].split(" ").slice(1, 8),
    ...base[0]
      .split(" ")
      .slice(base[0].split(" ").length - 1, base[0].split(" ").length) // bksp
  ].join(" ");
  return [row1, row2, row3, lastRow];
};

export const createSymbols = (base: string[], shift: string[]): string[] => {
  const Symbol1 = [
    shift[0]
      .split(" ")
      .slice(0, 9)
      .join(" "), // first part of shift top row
    shift[3]
      .split(" ")
      .slice(10, 11)
      .join(" ") // question mark
  ].join(" ");

  const Symbol2 = [
    shift[0]
      .split(" ")
      .slice(9, 11)
      .join(" "), // parens
    shift[3]
      .split(" ")
      .slice(8, 10)
      .join(" "), // angle brackets
    shift[0]
      .split(" ")
      .slice(12, 13)
      .join(" "), // plus
    base[0]
      .split(" ")
      .slice(11, 13)
      .join(" "), // minus, equals
    shift[0]
      .split(" ")
      .slice(11, 12)
      .join(" "), // underscore
    shift[1]
      .split(" ")
      .slice(shift[1].split(" ").length - 1, shift[1].split(" ").length)
      .join(" ") // vertical separator
  ].join(" ");

  const Symbol3 = [
    ...base[3].split(" ").slice(0, 1), // shift
    base[3]
      .split(" ")
      .slice(10, 11)
      .join(" "), // slash
    base[1]
      .split(" ")
      .slice(base[1].split(" ").length - 1, base[1].split(" ").length)
      .join(" "), // backslash
    shift[2]
      .split(" ")
      .slice(11, 12)
      .join(" "), // doublequote
    base[2]
      .split(" ")
      .slice(11, 12)
      .join(" "), // singlequote
    base[3]
      .split(" ")
      .slice(9, 10)
      .join(" "), // period
    base[2]
      .split(" ")
      .slice(10, 11)
      .join(" "), // semi-colon
    shift[2]
      .split(" ")
      .slice(10, 11)
      .join(" "), // colon
    ...base[0]
      .split(" ")
      .slice(base[0].split(" ").length - 1, base[0].split(" ").length) // bksp
  ].join(" ");
  return [Symbol1, Symbol2, Symbol3, lastRow];
};
