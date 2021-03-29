const getErrorDate = (searchValue) => {
  let dateFormat = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[1-2][0-9]|3[01])$/; // YYYY-MM-DD
  if (searchValue.search(dateFormat) !== -1) {
    return isDateValid(searchValue) ? "" : "Date is invalid";
  } else return "YYYY-MM-DD";
};

const getErrorDateRange = (searchValue) => {
  let dateRangeFormat = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[1-2][0-9]|3[01])\/\d{4}-(0[1-9]|1[012])-(0[1-9]|[1-2][0-9]|3[01])$/; // YYYY-MM-DD/YYYY-MM-DD;
  if (searchValue.search(dateRangeFormat) !== -1) {
    return isDateRangeValid(searchValue) ? "" : "Date range is invalid";
  } else {
    return "YYYY-MM-DD/YYYY-MM-DD";
  }
};

const isDateRangeValid = (date) => {
  const arrayOfDate = date.split("/");
  const startDate = new Date(arrayOfDate[0]);
  const endDate = new Date(arrayOfDate[1]);
  return !isDateValid(startDate) ||
    !isDateValid(endDate) ||
    startDate >= endDate
    ? false
    : true;
};

const isDateValid = (date) => {
  const inputDate = new Date(date);
  return inputDate > new Date() || isNaN(inputDate) ? false : true;
};

export { getErrorDate, getErrorDateRange };
