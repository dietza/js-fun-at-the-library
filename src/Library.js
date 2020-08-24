function createLibrary(libraryNameStr) {
  var library = {
    name: libraryNameStr,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library;
}

function addBook(library, bookObj) {
  // (Object.keys(library.shelves)).find(item => item.toString == bookObj.genre);

  if (bookObj.genre == "fantasy") {
    return (library.shelves.fantasy.push(bookObj));
  } else if (bookObj.genre == "fiction") {
    return (library.shelves.fiction.push(bookObj));
  } else if (bookObj.genre == "nonFiction") {
    return (library.shelves.nonFiction.push(bookObj));
  } else {
    return (library.shelves);
  }
}


  // console.log(Object.keys(library.shelves));
  // ^ logs an array ['fantasy', 'fiction', 'nonFiction']

  // if (bookObj.genre == library.shelves) {
  // library.shelves.keys.push(bookObj);
  // return (bookObj);

  // return (bookObj)


//

function checkoutBook(library, titleStr) {
 for (var i = 0; i < library.shelves.fiction.length; i++) {
   if (titleStr === library.shelves.fiction[i].title) {
     library.shelves.fiction.splice(i, 1);
     return `You have now checked out ${titleStr} from the ${library.name}`;
   }
 } return `Sorry, there are currently no copies of ${titleStr} available at the ${library.name}`;
}


// See if using the .find() method to return an object from an array
// will specify which shelf to make code more dynamic!

// function checkoutBook(library, titleStr) {
//   for (var i = 0; i < library.shelves.fiction.length; i++) {
//     if (library.shelves.fiction[i].title.includes(titleStr)) {
//       library.shelves.fiction.splice(i, 1);
//       return `You have now checked out ${titleStr} from the ${library.name}`;
//
//   for (var i = 0; i < library.shelves.fantasy.length; i++) {
//     if (library.shelves.fantasy[i].title.includes(titleStr)) {
//       library.shelves.fantasy.splice(i, 1);
//       return `You have now checked out ${titleStr} from the ${library.name}`;
//
//   for (var i = 0; i < library.shelves.nonFiction.length; i++) {
//     if (library.shelves.nonFiction[i].title.includes(titleStr)) {
//       library.shelves.nonFiction.splice(i, 1);
//       return `You have now checked out ${titleStr} from the ${library.name}`;
//       };
//     };
//   return `Sorry, there are currently no copies of ${titleStr} available at the ${library.name}`;
//   }
//   };
// };
// REMOVE the object P&P from the FICTION array.

// LOOP through each
// check if the title is on a certain shelf (if the shelf array INCLUDES the book object.title).
// IF it is on the shelf, take it off of the shelf.
// REMOVE (pop / shift) the book object from the appropriate shelf array.
// look at each title of each object.
// use dot notation to identify which shelf array to loop through.

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
