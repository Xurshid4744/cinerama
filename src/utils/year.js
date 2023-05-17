export const yearFunc = (filterData) => {
  if (filterData) {
    const yearFrom = filterData?.data.years.from;
    const yearTO = filterData?.data.years.to;
    let arr = [];
    for (let i = yearFrom; i < yearTO; i++) {
      arr.push(i);
    }
    return arr;
  }
};
