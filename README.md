# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @slav1998/lotide`

**Require it:**

`const _ = require('@slav1998/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(eqArrays)`: Verifies if two arrays are the same length. 
* `function2(assertEqualArrays)`: Verifies if two arrays are the exact same. 
* `function3(assertEqual)`: Verifies if the result is the same as the expected one.
* `function4(head)`: Gives the first element of an array. 
* `function5(middle)`: Gives the middle element(s) of an array depending if length is odd or even. 
* `function6(tail)`: Gives all the ellements of an array except the first item. 
* `function7(count)`: Count the ammount of times a letter appears in an array. 
* `function8(countOnly)`: Counts the exact number of times a given items appears in an array.
* `function9(eqObjects)`" Verifies if an object is the exact same as another one. 
* `function10(flatten)`: Turns multiple items (arrays, strings etc..) into one big array.
* `function11(letterPosition)`: Gives you the position of every single letter in an array. 
* `function12(assertEqualObjects)`: Compares if two objects are the same, then prints if they are equal are not with a nice message. 
* `function13(takeUntil)`: Reads an array and will stop at value you give it. 
* `function14(without)`: Verifies if a give array is located within another array.
* `function15(countLetters)`: Gives you the ammount of times each letter appears within an array.  