## Introduction
Recursion is a fundamental concept in programming where a function calls itself to solve smaller instances of a problem. It is widely used in algorithms for sorting, searching, dynamic programming, and more. However, understanding recursion can be challenging, especially when it comes to trusting the recursive calls. This is where the **Leap of Faith** principle comes into play.

Recursion occurs when a function calls itself to solve a problem. Every recursive function has two key components:

1. **Base Case**: A condition that terminates the recursion.
2. **Recursive Case**: A call to the same function with a smaller input.

### Example: Factorial Function
The factorial of a number \( n \) (denoted as \( n! \)) is defined as:
\[
 n! = \begin{cases}
1, & \text{if } n = 0 \\
n \times (n - 1)!, & \text{otherwise}
\end{cases}
\]

This can be implemented as:

=== "Java"

    ```java linenums="1"
    public static int factorial(int n) {
        if (n == 0) return 1; // Base case
        return n * factorial(n - 1); // Recursive case
    }
    ```

## The Leap of Faith

When working with recursion, it is crucial to **trust** that the function correctly solves smaller instances. Instead of manually tracing each recursive call, assume that the function works for a smaller value and build upon that assumption.

### Applying the Leap of Faith to Factorial

- Assume `factorial(n-1)` correctly computes \( (n-1)! \).
- Then, `factorial(n) = n * (n-1)!` must also be correct.

This approach makes reasoning about recursion easier and aligns with **mathematical induction**.

### Example: Computing Fibonacci Numbers

The Fibonacci sequence is defined as:
\[
F(n) = \begin{cases}
0, & \text{if } n = 0 \\
1, & \text{if } n = 1 \\
F(n-1) + F(n-2), & \text{otherwise}
\end{cases}
\]

Implementation:

=== "Java"

    ```java linenums="1"
    public static int fibonacci(int n) {
        if (n == 0) return 0; // Base case
        if (n == 1) return 1; // Base case
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }
    ```

Using the Leap of Faith:

- Assume `fibonacci(n-1)` and `fibonacci(n-2)` correctly compute \( F(n-1) \) and \( F(n-2) \).
- Then, `fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)` must also be correct.

??? question

    Given the root of a binary tree, return the number of the nodes in the tree.

    *Hint*: $$F(root) = F(root \rightarrow left) + F(root \rightarrow right)$$

## Tail Recursion

Tail recursion is a special form of recursion where the recursive call is the last operation in the function, allowing for optimizations like **tail call elimination**.

### Example: Tail-Recursive Factorial

=== "Java"

    ```java linenums="1"
    public static int factorialTail(int n, int accumulator) {
        if (n == 0) return accumulator;
        return factorialTail(n - 1, n * accumulator);
    }

    public static int factorial(int n) {
        return factorialTail(n, 1);
    }
    ```
Here, the recursive call does not need extra space on the call stack, improving efficiency.

## Use of Recursion

Recursion is useful for problems with a natural recursive structure, such as:

- Tree and graph traversal (e.g., Depth-First Search)
- Divide and conquer algorithms (e.g., Merge Sort, Quick Sort)
- Dynamic programming (e.g., Fibonacci with memoization)
