"use strict";

var books = {
    "Emma": {
      author: 'Jane Austen',
      published: 'December 25, 1815'
    },
    "Harry Potter and the Goblet of Fire": {
      author: 'JK Rowling',
      published: 'July 8, 2000'
    },
    "Eloquent Javascript": {
      author: 'Marijn Haverbeke',
      published: '2011'
    }
};

function getBookAuthor(name) {
    return books[name].author
};

function getDatePublished(name) {
  return books[name].published
};

module.exports = {
  getBookAuthor: getBookAuthor,
  getDatePublished: getDatePublished
};
