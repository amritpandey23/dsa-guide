# Dijkstra's Algorithm

<iframe width="560" height="315" src="https://www.youtube.com/embed/XB4MIexjvY0?si=N-D3CVrnEYy5CgWA" title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Just like [Bellman-Ford Algorithm](./bellman_ford_algorithm.md), Dijkstra's Algorithm is used to find shortest path distance from a single node to all the nodes in the graph.

Dijkstra's algorithm is more efficient than BFA as it uses greedy approach to process edges rather than processing all the nodes. Hence Dijkstra becomes very suitable to run on large graphs.

The implementation of Dijsktra's algorithm uses min heap or priority queue. The algorithm works by choosing nodes from the queue which are currently least cost to reach. From that chosen node, all the neighbor nodes are relaxed as seen in case of BFA also.

Initially all the nodes except the source node is assigned a distance of \(\infty\) and as the nodes are chosen they are marked processed and their distance is relaxed.

## Time Complexity

\(O(n \times mLog(m))\) where \(n\) is number of nodes and \(m\) is number of edges.

## Limitation

- Cannot provide right results with graphs having **negative weight edges**.

## Input

- Adjacency list or creation of Adjacency list from a set of edges

## Algorithm

### Directed Graph

=== "Java"

    ```java linenums="1"
    public class Dijkstra {
        public static int[] getShortestPathDistance(List<int[]>[] graph, int srcNode) {
            int n = graph.length;
            
            // distances[i] holds the shortestd distance to node i.
            // Start everything at "infinity" except the source, which is 0 away from itself.
            int[] distances = new int[n];
            Arrays.fill(distances, Integer.MAX_VALUE);
            distances[srcNode] = 0;

            // Min-heap ordered by cost-to-reach, so we always expand the closest
            // unprocessed node next
            PriorityQueue<Pair> minHeap = new PriorityQueue<>(
                    (a, b) -> Integer.compare(a.costToReach, b.costToReach));
            minHeap.offer(new Pair(srcNode, 0));

            // processed[i] = true once we've popped node i from the heap for the
            // first time. Because Dijkstra is greedy, the first time we pop a node,
            // its cost is guaranteed to be the shortest possible - so it's "final."
            boolean[] processed = new boolean[n];

            while (minHeap.size() > 0) {
                Pair curr = minHeap.poll();
                int node = curr.node;
                int costToReach = curr.costToReach;

                // This node may have been pushed multiple times with different costs
                // (since we don't do decrease-key on the heap). If we've already
                // finalized it, this is a stale, higher-cost entry - skip it.
                if (processed[node]) {
                    continue;
                }

                // Finalize this node's shortest distance.
                processed[node] = true;
                distances[node] = costToReach;

                // Try to relax every outgoing edge from this node: see if reaching
                // the neighbor via this node beats the neighbor's current best distance.
                for (int[] neighbor : graph[node]) {
                    int neighborNode = neighbor[0];
                    int edgeWeight = neighbor[1];
                    int candidateCost = costToReach + edgeWeight;

                    // Only push if this path is actually an improvement. This is
                    // just a pruning optimization - it can't remove correctness,
                    // it just avoids piling up heap entries we'd throw away anyway.
                    if (candidateCost < distances[neighborNode]) {
                        minHeap.offer(new Pair(neighborNode, candidateCost));
                    }
                }
            }

            return distances;
        }
    }
    ```

### Undirected Graph

For undirected graph, the adjacency list should also contain back-pairs also. The rest of the algorithm works same.

