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

---

## 2. First Occurrence of Target

### When to use

* Duplicates present
* Need leftmost index

### Invariant

> Answer (if exists) is always in `[l, r]`, and we **bias left**.

### Java

```java
static int firstOccurrence(int[] a, int target) {
    int l = 0, r = a.length - 1, ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (a[mid] == target) {
            ans = mid;
            r = mid - 1;
        } else if (a[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}
```

---

## 3. Last Occurrence of Target

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

---

## 4. Lower Bound (First ≥ target)

### When to use

* Insert position
* Range queries
* Count elements < target

### Invariant

> All elements **before `l` are < target**.

### Java

```java
static int lowerBound(int[] a, int target) {
    int l = 0, r = a.length;
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (a[mid] < target) l = mid + 1;
        else r = mid;
    }
    return l;
}
```

---

## 5. Upper Bound (First > target)

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

---

## 6. Binary Search on Answer (Search Space Reduction)

### When to use

* “Minimum / maximum value such that condition holds”
* Monotonic predicate

### Invariant

> All values `< lo` are invalid, all values `≥ hi` are valid.

---

### Example: Capacity to Ship Packages

```java
static boolean canShip(int[] w, int cap, int D) {
    int days = 1, load = 0;
    for (int x : w) {
        if (load + x > cap) {
            days++;
            load = 0;
        }
        load += x;
    }
    return days <= D;
}

static int shipWithinDays(int[] w, int D) {
    int lo = Arrays.stream(w).max().getAsInt();
    int hi = Arrays.stream(w).sum();

    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (canShip(w, mid, D)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
```

---

## 7. Binary Search in Rotated Sorted Array

### When to use

* Sorted array rotated at pivot
* No duplicates

### Invariant

> At least **one half is always sorted**.

### Java

```java
static int searchRotated(int[] a, int target) {
    int l = 0, r = a.length - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (a[mid] == target) return mid;

        if (a[l] <= a[mid]) { // left sorted
            if (a[l] <= target && target < a[mid])
                r = mid - 1;
            else
                l = mid + 1;
        } else { // right sorted
            if (a[mid] < target && target <= a[r])
                l = mid + 1;
            else
                r = mid - 1;
        }
    }
    return -1;
}
```

---

## 8. Binary Search on Matrix

### When to use

* Matrix sorted row-wise
* Treat matrix as 1D array

### Invariant

> Matrix index maps to sorted 1D order.

### Java

```java
static boolean searchMatrix(int[][] m, int target) {
    int R = m.length, C = m[0].length;
    int l = 0, r = R * C - 1;

    while (l <= r) {
        int mid = l + (r - l) / 2;
        int val = m[mid / C][mid % C];
        if (val == target) return true;
        if (val < target) l = mid + 1;
        else r = mid - 1;
    }
    return false;
}
```
