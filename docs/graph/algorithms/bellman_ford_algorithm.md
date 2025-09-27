# Bellman Ford Algorithm

Bellman Ford algorithm is used to find the shortest distance from given node.
It is a dynamic programming algorithm.

We have to be given a set of edges with their weights and total number of nodes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FtN3BYH2Zes?si=CPGq43pnCJ07JepS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

## BFA for undirected graph

For undirected graph BFA should be modified to relax the edges in both the directions, the modification of the graph will take place as follows:

=== "Java"

    ```java linenums="1"
    public class BFA {
        public static int[] getShortestDistances(int node, int totalNodes, Edge[] edges) {
            // variable initialization ...
            for (int v = 1; v < totalNodesProcessed, v++) {
                for (Edge e : edges) {
                    // relaxation from src to dest
                    if (distances[e.dest] > distances[e.src] + e.wt) {
                        distances[e.dest] = distances[e.src] + e.wt;
                    }
                    // relaxation from dest to src
                    if (distances[e.src] > distances[e.dest] + e.wt) {
                        distances[e.src] = distances[e.dest] + e.wt;
                    }
                }
            }
            return distances;
        }

        // Edge class definition ...
    }
    ```