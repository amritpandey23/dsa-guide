# Linear Scan

### When to use

* Unsorted data
* No constraints on time better than O(n)
* First brute-force step in interviews

### Invariant

> At index `i`, all elements before `i` have already been checked.

### Java

```java
static int linearSearch(int[] a, int target) {
    for (int i = 0; i < a.length; i++)
        if (a[i] == target) return i;
    return -1;
}
```