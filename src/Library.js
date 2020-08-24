function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library;
}


function addBook(library, book) {

  if (book.genre == "fantasy") {
    return (library.shelves.fantasy.push(book));
  } else if (book.genre == "fiction") {
    return (library.shelves.fiction.push(book));
  } else if (book.genre == "nonFiction") {
    return (library.shelves.nonFiction.push(book));
  } else {
    return (library.shelves);
  }
}


function checkoutBook(library, title) {
 for (var i = 0; i < library.shelves.fiction.length; i++) {
   if (title === library.shelves.fiction[i].title) {
     library.shelves.fiction.splice(i, 1);
     return `You have now checked out ${title} from the ${library.name}`;
   }
 } return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
