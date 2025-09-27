# Dijkstra's Shortest Path Algorithm

Dijkstra's algorithm is a **greedy algorithm** that finds the shortest path from a source vertex to all other vertices in a weighted graph with **non-negative edge weights**. It's one of the most fundamental algorithms in graph theory and is widely used in network routing, GPS navigation, and social network analysis.

## Algorithm Overview

<iframe width="560" height="315" src="https://www.youtube.com/embed/XB4MIexjvY0?si=N-D3CVrnEYy5CgWA" title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The algorithm works by:
1. Starting from the source vertex with distance 0
2. Using a priority queue to always process the vertex with the minimum distance
3. Relaxing edges to update distances to neighboring vertices
4. Marking vertices as processed once their shortest distance is determined

## Key Properties

- **Greedy Choice**: Always selects the unprocessed vertex with minimum distance
- **Optimal Substructure**: The shortest path to any vertex contains shortest paths to intermediate vertices
- **Non-negative Weights**: Only works with graphs having non-negative edge weights
- **Single Source**: Finds shortest paths from one source to all other vertices

## Implementation

=== "Java"

    ```java linenums="1"
    public class DijkstraAlgorithm {
        public int[] dijkstra(int n, int[][] edges, int source) {
            // Build adjacency list
            List<int[]>[] graph = new ArrayList[n];
            for (int i = 0; i < n; i++) {
                graph[i] = new ArrayList<>();
            }
            
            for (int[] edge : edges) {
                int from = edge[0];
                int to = edge[1];
                int weight = edge[2];
                graph[from].add(new int[]{to, weight});
                graph[to].add(new int[]{from, weight}); // For undirected graph
            }
            
            // Initialize distances
            int[] distances = new int[n];
            Arrays.fill(distances, Integer.MAX_VALUE);
            distances[source] = 0;
            
            // Priority queue: [distance, vertex]
            PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
            pq.offer(new int[]{0, source});
            
            boolean[] visited = new boolean[n];
            
            while (!pq.isEmpty()) {
                int[] curr = pq.poll();
                int dist = curr[0];
                int node = curr[1];
                
                if (visited[node]) continue;
                visited[node] = true;
                
                // Relax edges
                for (int[] neighbor : graph[node]) {
                    int nextNode = neighbor[0];
                    int edgeWeight = neighbor[1];
                    
                    if (!visited[nextNode] && dist + edgeWeight < distances[nextNode]) {
                        distances[nextNode] = dist + edgeWeight;
                        pq.offer(new int[]{distances[nextNode], nextNode});
                    }
                }
            }
            
            return distances;
        }
    }
    ```

=== "Python"

    ```py linenums="1"
    import heapq
    from collections import defaultdict

    def dijkstra(n, edges, source):
        # Build adjacency list
        graph = defaultdict(list)
        for from_node, to_node, weight in edges:
            graph[from_node].append((to_node, weight))
            graph[to_node].append((from_node, weight))  # For undirected graph
        
        # Initialize distances
        distances = [float('inf')] * n
        distances[source] = 0
        
        # Priority queue: (distance, vertex)
        pq = [(0, source)]
        visited = set()
        
        while pq:
            dist, node = heapq.heappop(pq)
            
            if node in visited:
                continue
            visited.add(node)
            
            # Relax edges
            for neighbor, edge_weight in graph[node]:
                if neighbor not in visited:
                    new_dist = dist + edge_weight
                    if new_dist < distances[neighbor]:
                        distances[neighbor] = new_dist
                        heapq.heappush(pq, (new_dist, neighbor))
        
        return distances
    ```
