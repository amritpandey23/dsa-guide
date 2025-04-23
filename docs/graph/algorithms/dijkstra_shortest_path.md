# Dijkstra Shortest Path Algorithm

DSP is a graph algorithm to find out the shortest distance to every node starting from a given node.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XB4MIexjvY0?si=N-D3CVrnEYy5CgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

=== "Java"

    ```java linenums="1"
    public class DSP {
        public static void findShortestPath(int node, List<Pair>[] graph) {
            PriorityQueue<Pair> queue = new PriorityQueue<>((p1, p2) -> {
                return p2.dist - p1.dist;
            });
            boolean[] seen = new boolean[graph.length];
            queue.add(new Pair(node, 0));
            while (!queue.isEmpty()) {
                int curr = queue.poll();
                seen[curr] = true;
                // process the node here
                for (Pair nbr : graph) {
                    if (!seen[nbr.node]) {
                        queue.add(new Pair(nbr.node, nbr.dist));
                    }
                }
            }
        }

        public static class Pair {
            int node;
            int dist;

            public Pair(int node, int dist) {
                this.node = node;
                this.dist = dist;
            }
        }
    }
    ```
