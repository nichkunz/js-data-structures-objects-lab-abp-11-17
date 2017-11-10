// Write your solution in this file!
const driver = {} ;
driver.name = "Sam";

function updateDriverWithKeyAndValue() {
  const newObj = {...driver};
  newObj.address = "11 Broadway";
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue() {
  driver.address = "12 Broadway";
  return driver;
}

function deleteFromDriverByKey() {
  const newdriver = {...driver};
  delete newdriver.name;
  return newdriver;
}

function destructivelyDeleteFromDriverByKey() {
  delete driver.name;
  return Object.keys({}, driver, { name : '' });
}
