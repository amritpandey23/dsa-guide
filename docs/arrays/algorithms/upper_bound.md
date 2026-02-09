# Upper Bound (First > target)

### When to use

* Count elements ≤ target
* Frequency calculation

### Invariant

> All elements **before `l` are ≤ target**.

### Java

```java
static int upperBound(int[] a, int target) {
    int l = 0, r = a.length;
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (a[mid] <= target) l = mid + 1;
        else r = mid;
    }
    return l;
}
```