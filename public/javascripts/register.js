
function categories() {
  let categs = document.querySelector('.category-box');
  console.log(categs);
  let chosenCategs = categs.filter((categ) => {
    return categ.checked;
  });
  return chosenCategs;
}


module.exports = categories;
