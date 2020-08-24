function createTitle(title) {
  var modifiedTitle = (`The ${title}`);
  return modifiedTitle;
}


function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return character;
}


function saveReview(newReview,reviews) {
  if (reviews.includes(newReview) == true) {
    return reviews;
  } else {
  reviews.push(newReview);
  return reviews;
  };
}


function calculatePageCount(title) {
  var pages = ((title.length) * 20);
  return pages;
}


function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
}


function editBook(book) {
book.pageCount = ((calculatePageCount(book.title)) * 0.75);
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
