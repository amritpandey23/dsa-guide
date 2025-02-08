# Backtracking

## Introduction

Backtracking is a strategy where we solve a problem for all possible patterns and stop after receiving the best solution.
The base idea to retract our solution to the best possible condition from where other solution can be made of branched is to undo any changes we've made.
What I mean by that is the magic of backtracking is to **rub out the non-working solution** to a point where the solution can be made working again.

## Finding valid permutation

#### Problem Statement

Given a string "ABC" find out if permutation "CBA" is possible from all the characters of the string.

#### Solution

The permutations of string "ABC" are {"ABC", "ACB", "BCA", "BAC", "CAB", "CBA"}.
As we can see the total number of permutations for "ABC" are \(3!\) which equals \(6\).
And after generating the permutations "CBA" is also a valid permutation.

We can solve this problem in a problem by applying backtracking as follows:

=== "Java"

    ```java linenums="1"
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

## Rat in a Maze

#### Problem Statement

Rat in a Maze. You have maze where the rat is left to wander in the start and is forced to find the path outside of the maze; rat can only move down and right direction. This 2D arrays shows the maze:

```
[[0, 1, 0, 0],
 [0, 0, 1, 0],
 [0, 0, 0, 1],
 [0, 1, 0, 2]]
```

The value `2` in the array is the position where rat can escape or exit the maze. The rat always start at index `(0, 0)`.

#### Solution

=== "Java"

    ```java linenums="1"
    public class RatInMaze {
        public boolean canRatEscape(int[][] maze, int start, int end) {
            int n = maze.length;
            int m = maze[0].length;
            if (start == n || end == m || maze[start][end] == 1 || maze[start][end] == 3) {
                return false;
            }
            if (maze[start][end] == 2) { // rat reached the exit in maze
                return true;
            }
            maze[start][end] = 3; // marking visited
            if (canRatEscape(maze, start + 1, end) || canRatEscape(maze, start, end + 1)) {
                return true;
            }
            maze[start][end] = 0; // unmarking visited so that new solution can be made
            return false;
        }
    }
    ```
