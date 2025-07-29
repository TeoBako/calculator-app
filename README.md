Calculator App
This is a simple React calculator application that performs basic arithmetic operations: addition, subtraction, multiplication, and division.

Features
Real-time input display and result calculation

Prevents entering two operators consecutively for error-free input

Supports decimal numbers

Clear (AC) and Delete (DEL) buttons to reset or correct input

Basic error handling for invalid expressions (shows "Syntax Error")

How it works
The app uses React's useState hook to manage two states:

calc: the current calculation input as a string

result: the evaluated result of the calculation

When a button is pressed, the input is appended to calc unless it would cause invalid consecutive operators.

Pressing = evaluates the expression using JavaScript's eval function and displays the result.

The AC button clears both the input and the result.

The DEL button removes the last character from the input.

