# Two Pointers (Opposite Ends)

### When to use

* **Sorted array**
* Pair / triplet sum problems
* Shrinking search space

### Invariant

> All pairs outside `[l, r]` are already proven invalid.

### Java

```java
static boolean twoSumSorted(int[] a, int target) {
    int l = 0, r = a.length - 1;
    while (l < r) {
        int sum = a[l] + a[r];
        if (sum == target) return true;
        if (sum < target) l++;
        else r--;
    }
    return false;
}
```