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

/*
Used above for more explicit clarity.
Could REFACTOR buildMainCharacter to be:

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name,     <--   when paired keys and values are
    age,      <--  the same, can used singularly.
    pronouns      <--
  };
  return character;
}
*/


function saveReview(newReview,reviewsArr) {
  if (reviewsArr.includes(newReview) == true) {
    return reviewsArr;
  } else {
  reviewsArr.push(newReview);
  return reviewsArr;
  };
}

/*
REFACTOR:

function saveReview(newReview,reviewsArr) {
  if (!reviewsArr.includes(newReview)) {
    reviewsArr.push(newReview)
    return reviewsArr;
  } else {
  return reviewsArr;
  };
}
*/

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

/*
REFACTOR (clarifying order of arguments for test2):

function writeBook(title, character, genre, pages) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
}

Because the test files passes arguments as
var book = writeBook(bookTitle, bookCharacter, "fantasy");
and NOTHING for the pageCount (we are pulling a previously established function to create that value within the object),
the string "fantasy" is the third argument passed,
so genre must be our third parameter to establish that key-value pair.
*/

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
