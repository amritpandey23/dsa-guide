# Backtracking

Backtracking is a strategy where we solve a problem for all possible patterns and stop after receiving the best solution.

## Finding valid permutation

#### Problem

Given a string "ABC" find out if permutation "CBA" is possible from all the characters of the string.

#### Solution

The permutations of string "ABC" are {"ABC", "ACB", "BCA", "BAC", "CAB", "CBA"}.
As we can see the total number of permutations for "ABC" are `Factorial(3)` which equals `6`.
And after generating the permutations "CBA" is also a valid permutation.

We can solve this problem in a problem by applying backtracking as follows:

```java
class BacktrackingExample {
   public static boolean hasPermutation(String text, String pattern) {
        int[] usedMap = new int[text.length()];
        return isPermutePossible(text, pattern, "", usedMap);
    }

    public static boolean isPermutePossible(String text, String pattern, String resultText,
            int[] usedMap) {
        if (text.length() > pattern.length()) {
            return false;
        }
        if (resultText.length() == text.length()) {
            if (pattern.equals(resultText)) {
                return true;
            }
        }
        for (int i = 0; i < text.length(); ++i) {
            if (usedMap[i] == 0) { // character is not used so far
                String newResultText = resultText + text.charAt(i);
                usedMap[i] = 1; // set character as used
                boolean isPossible = isPermutePossible(text, pattern, newResultText, usedMap);
                if (isPossible) { // solution is possible
                    return true; // cut the branch
                }
                usedMap[i] = 0; // free character to be used again
            }
        }
        return false;
    } 
}
```
