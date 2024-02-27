/* JavaScript Assignment Operators
    Assignment operators assign values to JavaScript variables.

            Operator	        Example	        Same As
                =	       |    x = y	    |   x = y
                +=	       |    x += y	    |   x = x + y
                -=	       |    x -= y	    |   x = x - y
                *=	       |    x *= y	    |   x = x * y
                /=	       |    x /= y	    |   x = x / y
                %=	       |    x %= y	    |   x = x % y
                **=	       |    x **= y	    |   x = x ** y
 */

let x = 4;
let y = 3;

x += y; 
console.log(x);// 7
x -= y;
console.log(x);// 4
x *= y;
console.log(x); // 12
x /= y;
console.log(x); // 4
x %= y;
console.log(x); // 1
x **= y;
console.log(x); // 1