# Math Formulas and Tricks

Here we are going to discuss common math formula and tricks used in programming.

## Greatest Common Divisor

GCD or Highest Common Factor(HCF) is the largest value number which can divide two given numbers. For example GCD of \(6, 12\) is \( 6\) as it is the largest number which can divide both \(6 \)  and \(12 \).  To find a GCD of two numbers both of them must be non-zero.

=== "Java"

    ```java linenums="1"
    class GCD {
        // recursive:
        public int gcd(int a, int b) {
            if (b == 0) {
                return a;
            }
            return (b, a % b);
        }

        // iterative:
        public int gcdIter(int a, int b) {
            while (a != b) {
                if (a > b) {
                    a = a - b;
                } else {
                    b = b - a;
                }
            }
            return a;
        }
    }
    ```

#### Related Problems

1. [A. Playing with Paper](https://codeforces.com/contest/527/problem/A)

## Lowest Common Multiple

LCM is the lowest value number (except 1) which can be divided by given two numbers. For example LCM of \(4, 6\) is \(12\). The formula of LCM requires the GCD value of two given numbers and then we can have LCM as follows:

$$LCM(x, y) = {x \times y \over GCD(x, y)}$$

=== "Java"

    ```java linenums="1"
    public class LCM {
        public int lcm(int x, int y) {
            return (x * y) / gcd(x, y);
        }
    }
    ```

## Check for Prime

Prime numbers in Math are the numbers which can be divided by \(1 \) and the number themselves. For example \(2, 3, 5, 7\) etc. are all prime numbers. \(1\) is not considered prime number. Negative numbers cannot be prime.

An interesting observation in natural numbers line is that prime numbers always repeat themselves at a factored length of \(6 \) and \(8 \) starting from number \(3\).

=== "Java"

    ```java linenums="1"
    public class CheckPrime {
        public boolean isPrime(int x) {
            if (x == 1) {
                return false; // 1 is not considered prime
            }
            if (x == 2 || x == 3) {
                return true; // 2 and 3 are basic primes
            }
            if (x % 2 == 0 || x % 3 == 0) {
                return false;
            }
            for (int i = 5; i * i <= x; i += 6) {
                // two prime numbers always repeat together
                // on the natural line number at an interval
                // of factored length of 6 and 8 from the 
                // last prime number
                if (x % i == 0 || (x + 2) % i == 0) {
                    return false;
                }
            }
            return true;
        }
    }
    ```

## Power of a number

The power, let's say \(x\) of a number \(y\) is the value which we get if get to multiple the number by itself \(x\) number of times.

$$x^{y} = {x \times x \times x \times ... (y \space times)}$$

In programming we can use a neat trick called *binary exponentiation* to calculate a power of a number in \(O(LogN)\) time instead of \(O(n)\) time.

=== "Java"

    ```java linenums="1"
    public class Power{
        /*
        Recursive Version
        */
        public long powRec(int x, int y) {
            if (y == 0) {
                return x;
            }
            if (y % 2 == 1) {
                // factor in extra 'x'
                return x * pow(x, y / 2) * pow(x, y / 2);
            }
            return pow(x, y / 2) * pow(x, y / 2);
        }

        /*
        Iterative version
        */
        public long powIter(int x, int y) {
            int ans = 1;
            while (y > 0) {
                if ((y & 1) == 1) {
                    // factor in extra 'x'
                    ans *= x;
                }
                x *= x;
                y = y >> 1;
            }
            return ans;
        }
    }
    ```

#### Related Problems

1. [50. Pow(x, n)](https://leetcode.com/problems/powx-n/description/)