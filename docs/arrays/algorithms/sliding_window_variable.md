# Sliding Window (Variable Size)

### When to use

* Longest / shortest subarray with constraint
* All elements non-negative (important!)

### Invariant

> Window sum is always ≤ `k`.

### Java

```java
static int longestSubarraySumAtMostK(int[] a, int k) {
    int l = 0, sum = 0, ans = 0;
    for (int r = 0; r < a.length; r++) {
        sum += a[r];
        while (sum > k) sum -= a[l++];
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
}
```