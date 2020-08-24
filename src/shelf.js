
function shelfBook(book, shelf) {
  if (shelf.length < 3)
  {shelf.unshift(book);
  return shelf;
  } else {
  return shelf;
  };
}


function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title == title) {
    shelf.splice( i, 1)
  };
 };
}


function listTitles(shelf) {
  var titles = [];

  for (var i = 0; i < shelf.length; i++){
    titles.push(shelf[i].title);
  }

  return titles.join(', ');
}


function searchShelf(shelf, title) {
  return ( shelf.includes( shelf.find( item => item.title === title) ) );
}


module.exports = {
shelfBook: shelfBook,
unshelfBook: unshelfBook,
listTitles: listTitles,
searchShelf: searchShelf
};
