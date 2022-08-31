function getPaperPrice(values) {
  var additionalIndianPapers = [2000, 3000];
  var additionalForeignPapers = [50, 75];

  if (Number(values.papers) > 1) {
    if (values.category.includes('Foreign')) {
      return (
        (new Date().toISOString() > '2022-10-15T18:29:59.059Z'
          ? additionalForeignPapers[1]
          : additionalForeignPapers[0]) *
        (values.papers - 1)
      );
    } else {
      return (
        (new Date().toISOString() > '2022-10-15T18:29:59.059Z'
          ? additionalIndianPapers[1]
          : additionalIndianPapers[0]) *
        (values.papers - 1)
      );
    }
  } else {
    return 0;
  }
}
module.exports = getPaperPrice;
