/* JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement */
/* 
Arithmetic Operations
A typical arithmetic operation operates on two numbers.

The two numbers can be literals: */

let x = 100 + 50;
console.log(x);

// or variables
let a = 5,
  b = 20;
let y = a + b;
console.log(y);

// or expressions
let z = (100 + 50) * b;
console.log(z);

/* 
 Operators and Operands
The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.

Operand	    Operator	Operand     Result
100         +           50          150
*/

// Adding
// The addition operator (+) adds numbers:
let xa = 5;
let ya = 2;
let za = xa + ya;

console.log(za); // 7

// Subtracting
// The subtraction operator (-) subtracts numbers.

let xb = 5;
let yb = 2;
let zb = xb - yb;

console.log(zb); // 3

// Multiplying
// The multiplication operator (*) multiplies numbers.

let xc = 5;
let yc = 2;
let zc = x * y;

console.log(zc); // 10

// Dividing
// The division operator (/) divides numbers.

let xd = 5;
let yd = 2;
let zd = xd / yd;

console.log(zd); // 2.5

// Remainder
// The modulus operator (%) returns the division remainder.

let xe = 5;
let ye = 2;
let ze = xe % ye;

console.log(ze); // 1
/* 
In arithmetic, the division of two integers produces a quotient and a remainder.

In mathematics, the result of a modulo operation is the remainder of an arithmetic division. */

// Incrementing
// The increment operator (++) increments numbers.

let xf = 5;
xf++;
let zf = xf;
console.log(zf); // 6

// Decrementing
// The decrement operator (--) decrements numbers.

let xg = 5;
xg--;
let zg = xg;
console.log(zg); // 4

// Exponentiation
// The exponentiation operator (**) raises the first operand to the power of the second operand.

let j = 5;
let g = 2;
const result = j ** g;
console.log(result); // 25

// j ** g produces the same result as Math.pow(j,g);
console.log(Math.pow(j, g));

// Operator Precedence
// Operator precedence describes the order in which operations are performed in an arithmetic expression.
let t = 50;
let l = t + 100 * 3;
console.log(l); // 350
/* 
As in traditional school mathematics, the multiplication is done first.

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

And (as in school mathematics) the precedence can be changed by using parentheses.

When using parentheses, the operations inside the parentheses are computed first: */

l = (t + 100) * 3;
console.log(l); // 450

// When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:

t = 100 + 50 - 3;
console.log(t); // 147
t = (100 / 50) * 3;
console.log(t); // 6