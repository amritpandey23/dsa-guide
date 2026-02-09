# Two Pointers (Same Direction)

### When to use

* Remove duplicates
* Partitioning
* In-place compression

### Invariant

> Elements `[0 … slow]` are already in final valid form.

### Java

```java
static void removeDuplicates(int[] a) {
    int slow = 0;
    for (int fast = 1; fast < a.length; fast++) {
        if (a[fast] != a[slow])
            a[++slow] = a[fast];
    }
}
```