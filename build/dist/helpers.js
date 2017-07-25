'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isBrowser = exports.isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isServer = exports.isServer = function isServer() {
  return typeof window === 'undefined';
};

// Format a WP post date as we like it.
var getDate = exports.getDate = function getDate(dateString) {
  var dateObj = new Date(Date.parse(dateString));
  var day = dateObj.getDate();
  var month = dateObj.getMonth() + 1;
  var year = dateObj.getFullYear();

  if (day.toString().length < 2) {
    day = '0' + day;
  }

  if (month.toString().length < 2) {
    month = '0' + month;
  }

  return day + '.' + month + '.' + year;
};

// Encode (=decode) html text into html entity.
var decodeHtmlEntity = exports.decodeHtmlEntity = function decodeHtmlEntity(str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
};

// Decides whether the passed post is new on not.
var isPostNew = exports.isPostNew = function isPostNew(post) {
  // One day in ms
  var oneDay = 24 * 60 * 60 * 1000;

  // Current date
  var now = new Date();

  // Post publish date
  var postDate = new Date(Date.parse(post.date));

  // Calculate difference
  var differenceInDays = Math.round(Math.abs((now.getTime() - postDate.getTime()) / oneDay));

  if (differenceInDays > 30) {
    return false;
  }

  return true;
};