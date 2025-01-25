## Transpose of a matrix

Given a matrix of `N x N` dimension the transpose is calculated as:

```java
class MatrixTranspose {
    public int[][] transpose(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; ++i) { // for each row
            for (int j = i; j < n; ++j) { // start from the row's position in column
                int tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = tmp;
            }
        }
    }
}
```

*Time Complexity*: `O(n^2)`

## Rotate Image

**To rotate an image matrix by +90 degrees or clockwise:**

- Tranpose the matrix.
- Reverse all rows.

**To rotate an image matrix by -90 degrees or anti-clockwise:**

- Tranpose the matrix.
- Reverse all columns.

