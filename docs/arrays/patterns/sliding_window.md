# Sliding Window

## Introduction

The **Sliding Window** technique is a powerful algorithmic approach used for problems involving arrays or lists where we need to find a subarray satisfying a given condition. Instead of iterating through all possible subarrays using nested loops (which is inefficient), we use a **window** that moves dynamically through the array, improving efficiency.

### When to Use Sliding Window?

You should consider using the **Sliding Window** technique when:

- The problem involves a **contiguous subarray or substring**.
- There’s a need for **optimization in an array traversal**.
- The brute-force approach involves **nested loops**, leading to an inefficient time complexity.

## Types of Sliding Window

Sliding Window problems generally fall into two categories:

1. **Fixed-size Sliding Window**: The window size remains constant.
2. **Variable-size Sliding Window**: The window expands or shrinks based on conditions.

## 1. Fixed-size Sliding Window

This approach is used when the size of the window (subarray) is **predefined**.

### Example 1: Maximum Sum of K Consecutive Elements

**Problem Statement:** Given an array of integers and an integer `k`, find the maximum sum of `k` consecutive elements in the array.

#### Brute Force Approach

From each element we will read next `k` elements and calculate the sum. This sum will be calcuated against the maximum sum received so far.

*Time Complexity*: \(O(n \times k)\)

=== "Java"

    ```java linenums="1"
    public int maxSumBruteForce(int[] arr, int k) {
        int maxSum = Integer.MIN_VALUE;
        for (int i = 0; i <= arr.length - k; i++) {
            int sum = 0;
            for (int j = i; j < i + k; j++) {
                sum += arr[j];
            }
            maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }
    ```

#### Optimized Sliding Window Approach

1. Compute the sum of the first `k` elements.
2. Slide the window by removing the first element and adding the next element.
3. Keep track of the maximum sum encountered.

*Time Complexity*: \(O(n)\)

=== "Java"

    ```java linenums="1"
    public int maxSumSlidingWindow(int[] arr, int k) {
        int maxSum = 0, windowSum = 0;
        
        // Compute sum of the first k elements
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        maxSum = windowSum;
        
        // Slide the window across the array
        for (int i = k; i < arr.length; i++) {
            windowSum += arr[i] - arr[i - k]; // Add new element, remove old one
            maxSum = Math.max(maxSum, windowSum);
        }
        
        return maxSum;
    }
    ```



## 2. Variable-size Sliding Window

This approach is useful when the window size is **not fixed** and needs to be dynamically adjusted based on some condition.

### Example 2: Smallest Subarray with Sum ≥ `S`

**Problem Statement:** Given an array of positive integers and a number `S`, find the minimal length of a contiguous subarray whose sum is greater than or equal to `S`. If no such subarray exists, return `0`.

#### Sliding Window Approach

1. Expand the window by adding elements from the right.
2. Shrink the window from the left as long as the sum remains ≥ `S`.
3. Track the minimum window length that satisfies the condition.

*Time Complexity*: \(O(n)\)

=== "Java"

    ```java linenums="1"
    public int minSubArrayLen(int S, int[] arr) {
        int minLength = Integer.MAX_VALUE, windowSum = 0;
        int left = 0;
        
        for (int right = 0; right < arr.length; right++) {
            windowSum += arr[right]; // Expand window
            
            while (windowSum >= S) { // Shrink window
                minLength = Math.min(minLength, right - left + 1);
                windowSum -= arr[left];
                left++;
            }
        }
        
        return (minLength == Integer.MAX_VALUE) ? 0 : minLength;
    }
    ```

## Related Problems

1. **Longest Substring Without Repeating Characters** [(LeetCode 3)](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
2. **Maximum Sum Subarray of Size K** [(LeetCode 53)](https://leetcode.com/problems/maximum-subarray/)
3. **Permutation in String** [(LeetCode 567)](https://leetcode.com/problems/permutation-in-string/)
4. **Longest Repeating Character Replacement** [(LeetCode 424)](https://leetcode.com/problems/longest-repeating-character-replacement/)
5. **Longest Subarray of 1s After Deleting One Element** [(LeetCode 1493)](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)
