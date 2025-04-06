# Problem - Coin Sum Combination

Given a set of coin values and sum value, our job is to find out the number of ways in which we can include the coins to make the sum value possible. A coin can be picked any number of times.

Leetcode Problem: [518. Coin Change II](https://leetcode.com/problems/coin-change-ii/description/)

## Solution using DP Map

```java
class CoinSumCombination {
    public int getCount(int[] coins, int val) {
        int m = val, n = coins.length;
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 0; i <= m; ++i) {
            for (int j = 0; j <= n; ++j) {
                if (i == 0) {
                    dp[i][j] = 1; // to make sum zero there is 1 way (not include that coin);
                } else if (j == 0) {
                    dp[i][j] = 0; // for sum > 0 there is no way to make that sum by including no coins
                } else {
                    dp[i][j] = dp[i][j - 1]; // store number of ways it was possible to make the sum
                    // by including coins before this coin.
                    if (coins[j - 1] <= i) {
                        // if sum is less than the current coin value
                        int remainingSum = i - coins[j - 1];
                        dp[i][j] += dp[remainingSum][j];
                    }
                }
            }
        }

        return dp[m][n];
    }
}
```