# Problem - Longest Common Subsequence in a String

Given two strings `s1` and `s2` of length `m` and `n` respectively we have to find the long common subsequence of characters in both.

Leetcode Problem: [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/description/)

## Solution using recursion and memoization

```java
class Memoization {
    public int lcs(String s1, String s2, int m, int n, int[][] memo) {
        if (m == 0 || n == 0) {
            // length of either of string becomes 0
            // solution is always 0 in this case
            memo[m][n] = 0;
            returm memo[m][n];
        }
        if (memo[m][n] != -1) {
            // was this state already solved?
            return memo[m][n];
        }
        if (s1.charAt(m - 1) == s2.charAt(n - 1)) {
            // found same character
            memo[m][n] = 1 + lcs(s1, s2, m - 1, n - 1, memo);
        } else {
            // max of two different solution space
            memo[m][n] = Math.max(lcs(s1, s2, m, n - 1, memo), lcs(s1, s2, m - 1, n, memo));
        }
        return memo[m][n];
    }
}
```

## Solution using dp map

```java
class DPMap {
    public int lcs(String s1, String s2) {
        int m = s1.length, n = s2.length;
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 0; i <= m; ++i) {
            for (int j = 0; j <= n; ++j) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                } else if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }
}
```