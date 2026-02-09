# Sliding Window (Fixed Size)

### When to use

* Max / min sum of size `k`
* Averages over windows
* Contiguous blocks of constant length

### Invariant

> Window always contains exactly `k` elements.

### Java

```java
static int maxSumWindow(int[] a, int k) {
    int sum = 0;
    for (int i = 0; i < k; i++) sum += a[i];

    int max = sum;
    for (int i = k; i < a.length; i++) {
        sum += a[i] - a[i - k];
        max = Math.max(max, sum);
    }
    return max;
}
```