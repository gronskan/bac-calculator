# Quick BAC Calculator

Our project was to create a site that allows a user to input the amount of alcohol they've had to drink and returns the user's calculated blood alcohol content (BAC) percentage, and whether they are below or above the legal limit to drive.

## Disclaimer

**This entire site is a learning project. Please do not use this site to decide whether to drive.**

## Project Objectives

Our objective for our Team Week project was to collaborate effectively together to create and present a project.

## Tools Used

The BAC Calculator site was written in HTML, CSS, and Javascript. Our UI framework was [Bootstrap v4.3.1](https://getbootstrap.com/).

## Mathematical Operations

An exponential regression analysis using the free [Desmos](https://www.desmos.com/) calculator was performed on a data set relating blood alcohol content, body weight, and number of drinks consumed from the [California Department of Motor Vehicles](https://cadmv.wordpress.com/tag/blood-alcohol-content/).

That analysis yielded the following formulas:

**Females**: (0.118358(0.993822x))y

**Males**: (0.118358(0.993822x))y

Where *x* is weight in pounds and *y* is number of drinks.

![Alcohol metabolization chart](https://cadmv.files.wordpress.com/2012/09/bac-graphic.jpg)

## Contributors

 **Kickass Industries, LLC** are [Jarrod Green](https://github.com/gronskan), [Pratiksha Wankhade](https://github.com/Pratikshawankhade), and [Matt Eilar](https://github.com/meilar).

## License

Copyright 2019 **Kickass Industries**, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Components left to finish

+ choose fonts
+ choose text colors for header
+ figure out how to make form fields required
+ finalize button colors
