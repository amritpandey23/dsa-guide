# Union-Find Algorithm for Disjoint Set

**Initialization of parents and ranks**:

```java
class UnionFind {
    public void initialize(int[] parents, int[] ranks) {
        int N = parents.length;
        for (int i = 0; i < N; ++i) {
            parents[i] = i;
            ranks[i] = 0;
        }
    }
}
```

**Find algorithm**:

```java
class UnionFind {
    public int find(int x, int[] parents) {
        if (parents[x] == x) {
            return x;
        }
        return find(parents[x], parents);
    }
}
```

**Find Algorithm with Path compression**:

Why Path compression? Because ultimately we want to reach the root parent of the tree. What if we set the root parent directly for the given element? This way we don't have to traverse the tree to find the root parent.

```java
class UnionFind {
    public int find(int x, int[] parent) {
        if (x == parent[x]) {
            return x;
        }
        parent[x] = find(parent[x], parent); // path compression
        return parent[x];
    }
}
```

**Union Algorithm**:

```java
class UnionFind {
    public void union(int x, int y, int[] parents) {
        int parentX = find(x, parents);
        int parentY = find(y, parents);

        if (parentX == parentY) {
            return;
        }

        parent[parentY] = parentX;
    }
}
```

**Union by Rank Algorithm**:

Why do we need the ranking? Because with simple Union operation, a chain is formed that takes O(n) time to find the parent in the worst case and then unionize two elements.

```java
class UnionRankFind {
    public void union(int x, int y, int[] parents, int[] ranks) {
        int parentX = find(x, parents);
        int parentY = find(y, parents);

        if (parentX == parentY) {
            return;
        }

        if (ranks[parentX] > ranks[parentY]) { // union based on ranking
            parents[parentY] = parentX;
        } else if (ranks[parentY] > ranks[parentX]) {
            parents[parentX] = parentY;
        } else {
            parents[parentY] = parentX;
            ranks[parentX]++;
        }
    }
}
```