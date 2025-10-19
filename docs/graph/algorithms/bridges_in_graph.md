# Bridges in Graph

A bridge is an edge in the graph, which when removed causes the number of connected component to increase.

We are given a connected graph and we have to find out and print the edges in the graph which when removed will increase the number of connected components in the graph.

We will use Tarjan's algorithm to find out the bridges in a graph.

## Explanation 1

<iframe width="560" height="315" src="https://www.youtube.com/embed/CsGP_s_3GWg?si=Z_KW6IjdFYBtR5dm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Explanation 2

<iframe width="560" height="315" src="https://www.youtube.com/embed/qrAub5z8FeA?si=nJQSkcTnJGw51LFa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 🧑‍💻 Implementation

=== "Java"

    ```java linenums="1"
    class Solution {
        public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
            List<Integer>[] graph = buildGraph(n, connections);
            Map<Integer, Integer> disc, low;
            disc = new HashMap<>();
            low = new HashMap<>();
            Set<Integer> visited = new HashSet<>();
            dfs(0, -1, 1, visited, low, disc, graph);
            return Ans;
        }

        private List<List<Integer>> Ans = new ArrayList<>();

        private void dfs(int src, int parent, int startTime, Set<Integer> visited,
                Map<Integer, Integer> low, Map<Integer, Integer> disc, List<Integer>[] graph) {
            disc.put(src, startTime);
            low.put(src, startTime);
            visited.add(src);

            for (int nbr : graph[src]) {
                if (nbr == parent) { // ignore parent node
                    continue;
                }
                if (visited.contains(nbr)) {
                    // if it's already visited it means that
                    // we've come to this node after traversing that node
                    // which again means it's low hasn't been processed yet
                    // so, we have to read the discovery value here.
                    low.put(src, Math.min(low.get(src), disc.get(nbr)));
                } else {
                    // else go into the neighbor node first
                    dfs(nbr, src, startTime + 1, visited, low, disc, graph);
                    // the neighbor now already have it's low value ready
                    // if it's low value is more than the current node's
                    // discovery value then we have a bridge!
                    if (low.get(nbr) > disc.get(src)) {
                        Ans.add(Arrays.asList(src, nbr));
                    }
                    // otherwise, we will update the current node's low
                    // value with the neighbor's already calculated low
                    // value.
                    low.put(src, Math.min(low.get(src), low.get(nbr)));
                }
            }
        }

        private List<Integer>[] buildGraph(int n, List<List<Integer>> conns) {
            List<Integer>[] graph = new List[n];
            for (int i = 0; i < n; ++i) {
                graph[i] = new ArrayList<>();
            }
            for (List<Integer> conn : conns) {
                int u = conn.get(0);
                int v = conn.get(1);
                graph[u].add(v);
                graph[v].add(u);
            }
            return graph;
        }
    }
	```

## Related Problems

1. [Leetcode - 1192. Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)