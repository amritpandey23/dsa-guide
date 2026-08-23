# Floyd-Warshall Algorithm

Floyd-Warshall is a multi-source shortest path algorithm.

## Time Complexity

\(O(n^3)\) where \(n\) is the number of nodes.

## Algorithm

=== "Java"

    ```java linenums="1"
    public class FloydWarshall {
        public static int[][] getAllShortestPaths(Integer[][] adjMatrix) {
            int n = adjMatrix.length;
            int[][] distances = new int[n][n];

            // Step 1: Initialize the distance matrix from the adjacency matrix.
            for (int i = 0; i < n; ++i) {
                for (int j = 0; j < n; ++j) {
                    if (adjMatrix[i][j] != null) {
                        // Direct edge exists — use its weight as the initial distance.
                        distances[i][j] = adjMatrix[i][j];
                    } else {
                        // No direct edge: distance to self is 0, otherwise "infinity"
                        // (represented as Integer.MAX_VALUE) until a path is found.
                        distances[i][j] = (i == j) ? 0 : Integer.MAX_VALUE;
                    }
                }
            }

            // Step 2: Try using each node k as an intermediate point on the path
            // from i to j, and relax the distance if going through k is shorter.
            for (int k = 0; k < n; ++k) {
                for (int i = 0; i < n; ++i) {
                    for (int j = 0; j < n; ++j) {
                        // Only relax if both i->k and k->j are actually reachable.
                        // Skipping this check would let Integer.MAX_VALUE + something
                        // overflow into a negative number and corrupt the result.
                        if (distances[i][k] != Integer.MAX_VALUE
                                && distances[k][j] != Integer.MAX_VALUE) {
                            distances[i][j] = Math.min(
                                    distances[i][j],
                                    distances[i][k] + distances[k][j]
                            );
                        }
                    }
                }
            }

            // Note: this does not detect negative cycles. If the graph may contain
            // negative edge weights, check distances[i][i] < 0 after this loop —
            // that would indicate node i sits on a negative cycle and its distances
            // are not meaningful.
            return distances;
        }
    }
    ```
