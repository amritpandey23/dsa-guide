# Level Order Traversal from Any Node

Level order traversal, also known as breadth-first traversal, can be performed starting from any node in a binary tree if we maintain a mapping of each node to its parent. This mapping allows traversal in all directions (left, right, and parent).

## Problem Examples

Here are some problems where this technique is useful:

> [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)

> [All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/)

## Algorithm

The algorithm involves two main steps:

1. **Building the Parent Map**: Traverse the tree to store the parent of each node in a `HashMap`.
2. **Performing Level Order Traversal**: Use a queue to perform breadth-first traversal starting from the target node, while keeping track of visited nodes to avoid cycles.

=== "Java"

    ```java linenums="1"
    public class BinaryTreeTraversal {
        public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
            // Step 1: Build the parent map
            Map<Integer, TreeNode> parents = new HashMap<>();
            Queue<TreeNode> queue = new ArrayDeque<>();
            queue.offer(root);

            while (!queue.isEmpty()) {
                TreeNode current = queue.poll();
                if (current.left != null) {
                    parents.put(current.left.val, current);
                    queue.offer(current.left);
                }
                if (current.right != null) {
                    parents.put(current.right.val, current);
                    queue.offer(current.right);
                }
            }

            // Step 2: Perform level order traversal from the target node
            Set<TreeNode> visited = new HashSet<>();
            queue.offer(target);
            visited.add(target);

            while (k > 0 && !queue.isEmpty()) {
                int size = queue.size();
                for (int i = 0; i < size; i++) {
                    TreeNode current = queue.poll();

                    // Traverse left child
                    if (current.left != null && !visited.contains(current.left)) {
                        queue.offer(current.left);
                        visited.add(current.left);
                    }

                    // Traverse right child
                    if (current.right != null && !visited.contains(current.right)) {
                        queue.offer(current.right);
                        visited.add(current.right);
                    }

                    // Traverse parent
                    if (parents.containsKey(current.val) && !visited.contains(parents.get(current.val))) {
                        queue.offer(parents.get(current.val));
                        visited.add(parents.get(current.val));
                    }
                }
                k--;
            }

            // Collect all nodes at distance K
            List<Integer> result = new ArrayList<>();
            while (!queue.isEmpty()) {
                result.add(queue.poll().val);
            }
            return result;
        }
    }

    class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) {
            this.val = val;
        }
    }
    ```
