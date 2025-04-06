# Adelson-Velsky and Landis (AVL) Tree

## Definition

The BST tree when converted to a height balanced tree then it becomes an AVL Tree. **Balancing factor** of a tree node is the difference between the heights of the left and right sub tree.

For a tree to be height-balanced the factor should belong to a value in the set \(\{1, 0, -1\}\). More specifically the absolute difference of heights of right and left subtree must be either \(0\) or \(1\).

```mermaid
graph TD;
    A[30] -->|BF = 1 - 1 = 0| B[20]
    A -->|BF = 1 - 0 = 1| C[40]
    B -->|BF=0| D[10]
    B -->|BF=0| E[25]
    C -->|BF=0| F[50]
```

## Inserting in AVL
