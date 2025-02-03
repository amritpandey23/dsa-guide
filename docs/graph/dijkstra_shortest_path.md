# Dijkstra Shortest Path Algorithm

DSP is a graph algorithm to find out the shortest distance to every node starting from a given node.

```java
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