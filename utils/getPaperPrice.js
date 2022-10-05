var additionalIndianPapers = [2000, 3000];
var additionalForeignPapers = [50, 75];

function getPaperSinglePrice(values) {
  if (Number(values.papers) > 1) {
    if (values.category.includes('Foreign')) {
      return new Date().toISOString() > '2022-10-05T18:29:59.059Z'
        ? additionalForeignPapers[1]
        : additionalForeignPapers[0];
    } else {
      return new Date().toISOString() > '2022-10-05T18:29:59.059Z'
        ? additionalIndianPapers[1]
        : additionalIndianPapers[0];
    }
  } else {
    return 0;
  }
}
function getPaperPrice(values) {
  if (Number(values.papers) > 1) {
    if (values.category.includes('Foreign')) {
      return (
        (new Date().toISOString() > '2022-10-05T18:29:59.059Z'
          ? additionalForeignPapers[1]
          : additionalForeignPapers[0]) *
        (values.papers - 1)
      );
    } else if (values.category.includes('Indian')) {
      return (
        (new Date().toISOString() > '2022-10-05T18:29:59.059Z'
          ? additionalIndianPapers[1]
          : additionalIndianPapers[0]) *
        (values.papers - 1)
      );
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
module.exports = { getPaperSinglePrice, getPaperPrice };
