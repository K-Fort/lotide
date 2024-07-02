# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @fork-k/lotide`

**Require it:**

`const _ = require('@fort-k/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `const tail = function(arr)`: This function gets all the items in an array except the first one. 

- `const assertEqual = function (actual, expected)`: This function checks if two primitive values (like numbers or strings) are the same.

- `const head = function (arr)`: This function gets the first item in an array.

- `eqArrays = function(arr1, arr2)`: This function compares two arrays to see if they are the same.

- `const assertArraysEqual = function(arr1, arr2)`: This function checks if two arrays are the same.

- `const without = function(source, itemsToRemove)`: This function removes unwanted items from an array so we can focus on what we need.

- `const middle = function(arr)`: This function finds the middle item(s) of an array.

- `const countOnly = function (allItems, itemsToCount)`: This function counts specific items in a collection, ignoring the rest.

- `const letterPositions = function(sentence)`: This function finds all the positions of each character in a string.

- `const findKeyByValue = function(object, value) `: This function finds the key in an object that has a specific value.

- `const eqObjects = function(object1, object2)`: This function compares two objects to see if they are the same.

- `const assertObjectsEqual = function (actual, expected)`: This function checks if two objects are the same.

- `const map = function (array, callback)`: This function applies another function to each item in an array and returns a new array with the results.

- `const takeUntil = function(array, callback)`: This function collects items from an array until another function returns true.

- `const findKey = (object, callback)`: This function finds the first key in an object where the value meets a specific condition.

