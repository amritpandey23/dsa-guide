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
			Map<Integer, Integer> disc = new HashMap<>(); // ✅ FIX: use separate map for discovery time
			Map<Integer, Integer> low = new HashMap<>(); // ✅ FIX: separate map for low values
			Set<Integer> visited = new HashSet<>();
			List<Integer>[] graph = buildGraph(n, connections);

			List<List<Integer>> Ans = new ArrayList<>();

			dfs(0, -1, visited, disc, low, graph, Ans);

			return Ans;
		}

		private static int time = 1; // ✅ FIX: renamed startTime to time and keep it resettable

		private void dfs(int src, int parent, Set<Integer> visited,
				Map<Integer, Integer> disc, Map<Integer, Integer> low,
				List<Integer>[] graph, List<List<Integer>> Ans) {

			visited.add(src);
			disc.put(src, time);
			low.put(src, time);
			time++;

			for (int nbr : graph[src]) {
				if (nbr == parent)
					continue; // ✅ FIX: skip the parent node

				if (!visited.contains(nbr)) {
					dfs(nbr, src, visited, disc, low, graph, Ans);
					low.put(src, Math.min(low.get(src), low.get(nbr)));

					// ✅ FIX: correct bridge condition using low[nbr] > disc[src]
					if (low.get(nbr) > disc.get(src)) {
						Ans.add(Arrays.asList(src, nbr));
					}
				} else {
					// ✅ FIX: back-edge update
					low.put(src, Math.min(low.get(src), disc.get(nbr)));
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