let categories = function () {
  let categs = document.querySelector('.category-box');
  let chosenCategs = categs.filter((categ) => {
    return categ.checked;
  });
  return chosenCategs;
}


module.exports = categories;
