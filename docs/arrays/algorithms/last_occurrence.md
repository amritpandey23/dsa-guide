# Last Occurrence of Target

### When to use

* Duplicates present
* Need rightmost index

### Invariant

> Answer (if exists) is always in `[l, r]`, and we **bias right**.

### Java

```java
static int lastOccurrence(int[] a, int target) {
    int l = 0, r = a.length - 1, ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (a[mid] == target) {
            ans = mid;
            l = mid + 1;
        } else if (a[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}
```