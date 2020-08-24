
function shelfBook(book, shelf) {
  if (shelf.length < 3)
  {shelf.unshift(book);
  return shelf;
  } else {
  return shelf;
  };
}

/*
Clarifying variable names:

function shelfBook(bookObj, shelfArr) {
  if (shelfArr.length < 3)
  {shelfArr.unshift(bookObj);
  return shelfArr;
  } else {
  return shelfArr;
  };
}

Remember for arguments being passed here that `book` is an OBJECT,
and `shelf` is an ARRAY (of `book` objects (in)/on a single, specific shelf.)
*/

function unshelfBook(titleStr, shelf) {
  for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title == titleStr) {
    shelf.splice( i, 1)
  };
 };
}

/*
function unshelfBook(titleStr, shelf) {
  shelf.indexOf(shelf.title).splice( )

FIGURE OUT HOW BAILEY RESOLVED THIS IN ONE LINE!

  for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title == titleStr) {
    shelf.splice( i, 1)
  };
 };
}
*/


// The result of listTitles() should list all of the titles in a SINGLE STRING!

function listTitles(shelf) {
  var titlesArr = [];
  // var titlesArr needed to be defined OUTSIDE of the FOR LOOP!
  // Otherwise it was undefined for the following RETURN statement.

  for (var i = 0; i < shelf.length; i++){
    // var titlesArr = [];
    titlesArr.push(shelf[i].title);

    // return(titlesArr.join());
    // ^ placed HERE returned ONLY 'Hyperion'
    // (titlesArr was still being defined INSIDE the FOR LOOP...)

    //return titlesARR;
  }
  //return(titlesArr.join());
  // ^ placed HERE returned ONLY 'Ender's Game'
  // (titlesArr was still being defined INSIDE the FOR LOOP...)

  return titlesArr.join(', ');
}



function searchShelf(shelf, titleStr) {
  return ( shelf.includes( shelf.find( item => item.title === titleStr) ) );
}

// .find() method RETURNS an object from an array

/*
To resolve with a FOR LOOP:

function searchShelf(shelf, titleStr) {
  for (var i = 0; i < shelf.length; i++) {
    if (titleStr === shelf[i].title) {
    return true;
    }
  }
  return false;
}

*/

module.exports = {
shelfBook: shelfBook,
unshelfBook: unshelfBook,
listTitles: listTitles,
searchShelf: searchShelf
};
