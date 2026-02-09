# 📘 PART 2 — BINARY SEARCH

---

## 1. Classic Binary Search

### When to use

* Sorted array
* Exact value search
* O(log n) required

### Invariant

> If target exists, it is always inside the range `[l, r]`.

### Java

```java
static int binarySearch(int[] a, int target) {
    int l = 0, r = a.length - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (a[mid] == target) return mid;
        if (a[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}
```