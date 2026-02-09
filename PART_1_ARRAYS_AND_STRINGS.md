# 📘 PART 1 — ARRAYS & STRINGS

---

## 1. Linear Scan

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

---

## 2. Two Pointers (Opposite Ends)

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

---

## 3. Two Pointers (Same Direction)

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

---

## 4. Sliding Window (Fixed Size)

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

---

## 5. Sliding Window (Variable Size)

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

---

## 6. Prefix Sum

### When to use

* Multiple range sum queries
* Subarray problems
* Preprocessing for O(1) queries

### Invariant

> `prefix[i]` = sum of elements before index `i`.

### Java

```java
static int[] prefixSum(int[] a) {
    int[] p = new int[a.length + 1];
    for (int i = 0; i < a.length; i++)
        p[i + 1] = p[i] + a[i];
    return p;
}
```

---

## 7. Subarray Sum = K (Prefix + HashMap)

### When to use

* Subarrays with negative numbers
* Count number of subarrays

### Invariant

> If `prefix[j] - prefix[i] = k`, then subarray `(i, j]` sums to `k`.

### Java

```java
static int subarraySum(int[] a, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, 1);

    int sum = 0, count = 0;
    for (int x : a) {
        sum += x;
        count += map.getOrDefault(sum - k, 0);
        map.put(sum, map.getOrDefault(sum, 0) + 1);
    }
    return count;
}
```

---

## 8. Kadane’s Algorithm

### When to use

* Maximum subarray sum
* 1D DP optimization

### Invariant

> `curr` = maximum subarray sum **ending at current index**.

### Java

```java
static int maxSubArray(int[] a) {
    int curr = a[0], best = a[0];
    for (int i = 1; i < a.length; i++) {
        curr = Math.max(a[i], curr + a[i]);
        best = Math.max(best, curr);
    }
    return best;
}
```

---

## 9. Dutch National Flag

### When to use

* Array with 3 distinct values
* In-place sorting

### Invariant

```
[0 .. low-1]   -> 0
[low .. mid-1] -> 1
[mid .. high]  -> unknown
[high+1 .. n]  -> 2
```

### Java

```java
static void sortColors(int[] a) {
    int low = 0, mid = 0, high = a.length - 1;
    while (mid <= high) {
        if (a[mid] == 0) swap(a, low++, mid++);
        else if (a[mid] == 1) mid++;
        else swap(a, mid, high--);
    }
}
```

---

## 10. Merge Intervals

### When to use

* Interval scheduling
* Range merging problems

### Invariant

> Result list is always sorted and non-overlapping.

### Java

```java
static List<int[]> merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    List<int[]> res = new ArrayList<>();

    for (int[] in : intervals) {
        if (res.isEmpty() || res.get(res.size()-1)[1] < in[0])
            res.add(in);
        else
            res.get(res.size()-1)[1] =
                Math.max(res.get(res.size()-1)[1], in[1]);
    }
    return res;
}
```

---

## 11. Rotate Array (Reversal Algorithm)

### When to use

* Rotate array in-place
* O(1) space requirement

### Invariant

> Three reversals restore relative order.

### Java

```java
static void rotate(int[] a, int k) {
    k %= a.length;
    reverse(a, 0, a.length - 1);
    reverse(a, 0, k - 1);
    reverse(a, k, a.length - 1);
}
```

---

## 12. Next Permutation

### When to use

* Lexicographic ordering
* Combinatorics problems

### Invariant

> Suffix after pivot is always non-increasing.

### Java

```java
static void nextPermutation(int[] a) {
    int i = a.length - 2;
    while (i >= 0 && a[i] >= a[i + 1]) i--;
    if (i >= 0) {
        int j = a.length - 1;
        while (a[j] <= a[i]) j--;
        swap(a, i, j);
    }
    reverse(a, i + 1, a.length - 1);
}
```
