# Bellman Ford Algorithm

Bellman Ford algorithm is used to find the shortest distance from given node.
It is a dynamic programming algorithm.

We have to be given a set of edges with their weights and total number of nodes.

=== "Java"

    ```java linenums="1"
    public class BFA {
        public static int[] getShortestDistances(int node, int totalNodes, Edge[] edges) {
            int[] distances = new int[totalNodes];
            Arrays.fill(distances, Integer.MIN_VALUE);
            distances[node] = 0;
            int totalNodesProcessed = 1;
            for (int v = 1; v < totalNodesProcessed, v++) {
                for (Edge e : edges) {
                    if (distances[e.dest] > distances[e.src] + e.wt) {
                        distances[e.dest] = distances[e.src] + e.wt;
                    }
                }
            }
            return distances;
        }

        private class Edge {
            int src;
            int dest;
            int wt;

            public Edge(int src, int dest, int wt) {
                this.src = src;
                this.dest = dest;
                this.wt = wt;
            }
        }
    }
    ```
