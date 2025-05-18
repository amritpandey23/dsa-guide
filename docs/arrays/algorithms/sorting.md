# Sorting Algorithms

## Bubble Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/BF9DB0Nhvlk?si=sCSBToxGTa3hS6DR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Repeatedly swaps adjacent elements if they are in the wrong order.  

=== "Java"

    ```java linenums="1"
    void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++)
            for (int j = 0; j < n - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    // Swap if the current element is greater than the next
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(n^2)\)  
- **Omega:** \(Ω(n)\)  
- **Theta:** \(Θ(n^2)\)

**Space Complexity:**  
\(O(1)\)

## Selection Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/GUDLRan2DWM?si=ckb2Z6RRJBiUcjEP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Repeatedly selects the minimum element and moves it to the sorted portion of the array.  

=== "Java"

    ```java linenums="1"
    void selectionSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;

            for (int j = i + 1; j < n; j++)
                if (arr[j] < arr[minIdx])
                    minIdx = j;

            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(n^2)\)  
- **Omega:** \(Ω(n^2)\)  
- **Theta:** \(Θ(n^2)\)

**Space Complexity:**  
\(O(1)\)

## Insertion Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/i-SKeOcBwko?si=hiqRaxIApkJRWxoq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Builds the final sorted array one item at a time.  

=== "Java"

    ```java linenums="1"
    void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;

            // Move elements greater than key to one position ahead
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(n^2)\)  
- **Omega:** \(Ω(n)\)  
- **Theta:** \(Θ(n^2)\)

**Space Complexity:**  
\(O(1)\)

## Merge Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/TzeBrDU-JaY?si=_D1r0eD54flkRLWG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Divides the array into halves, sorts them and merges the sorted halves.  

=== "Java"

    ```java linenums="1"
    void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;

            // Recursively sort left and right halves
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);

            // Merge the sorted halves
            merge(arr, l, m, r);
        }
    }

    void merge(int[] arr, int l, int m, int r) {
        int n1 = m - l + 1, n2 = r - m;
        int[] L = new int[n1], R = new int[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2)
            arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];

        while (i < n1)
            arr[k++] = L[i++];
        while (j < n2)
            arr[k++] = R[j++];
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(n \log n)\)  
- **Omega:** \(Ω(n \log n)\)  
- **Theta:** \(Θ(n \log n)\)

**Space Complexity:**  
\(O(n)\)

## Quick Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/COk73cpQbFQ?si=baHCyM3UYpVh0WCP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Picks a pivot and partitions the array such that elements less than pivot are left, greater are right.  

=== "Java"

    ```java linenums="1"
    void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1]; 
        arr[i + 1] = arr[high]; 
        arr[high] = temp;

        return i + 1;
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(n^2)\)  
- **Omega:** \(Ω(n \log n)\)  
- **Theta:** \(Θ(n \log n)\)

**Space Complexity:**  
\(O(\log n)\)

## Heap Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqPJF2L5h9U?si=s0Ak24y_0SVPD-Uk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Builds a max heap and repeatedly extracts the maximum element.  

=== "Java"

    ```java linenums="1"
    void heapSort(int[] arr) {
        int n = arr.length;

        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        for (int i = n - 1; i >= 0; i--) {
            int temp = arr[0]; arr[0] = arr[i]; arr[i] = temp;
            heapify(arr, i, 0);
        }
    }

    void heapify(int[] arr, int n, int i) {
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest]){
            largest = l;
        }
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        if (largest != i) {
            int swap = arr[i]; arr[i] = arr[largest]; arr[largest] = swap;
            heapify(arr, n, largest);
        }
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(n \log n)\)  
- **Omega:** \(Ω(n \log n)\)  
- **Theta:** \(Θ(n \log n)\)

**Space Complexity:**  
\(O(1)\)

## Radix Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/xhr26ia4k38?si=TrVpSFlJleTR8b6e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Sorts numbers digit by digit starting from least significant digit.  

=== "Java"

    ```java linenums="1"
    void radixSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();

        for (int exp = 1; max / exp > 0; exp *= 10)
            countingSort(arr, exp);
    }

    void countingSort(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];

        for (int i = 0; i < n; i++)
            count[(arr[i] / exp) % 10]++;

        for (int i = 1; i < 10; i++)
            count[i] += count[i - 1];

        for (int i = n - 1; i >= 0; i--) {
            int idx = (arr[i] / exp) % 10;
            output[count[idx] - 1] = arr[i];
            count[idx]--;
        }

        for (int i = 0; i < n; i++)
            arr[i] = output[i];
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(nk)\)  
- **Omega:** \(Ω(nk)\)  
- **Theta:** \(Θ(nk)\)

**Space Complexity:**  
\(O(n + k)\)

## Bucket Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/NvZG0dZ60RQ?si=QlYBwMBxPscXyDwN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Divides elements into buckets and sorts each bucket individually.  

=== "Java"

    ```java linenums="1"
    void bucketSort(float[] arr) {
        int n = arr.length;
        List<Float>[] buckets = new List[n];

        for (int i = 0; i < n; i++)
            buckets[i] = new ArrayList<>();

        for (float value : arr)
            buckets[(int)(value * n)].add(value);

        for (List<Float> bucket : buckets)
            Collections.sort(bucket);

        int index = 0;
        for (List<Float> bucket : buckets)
            for (float value : bucket)
                arr[index++] = value;
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(n^2)\)  
- **Omega:** \(Ω(n + k)\)  
- **Theta:** \(Θ(n + k)\)

**Space Complexity:**  
\(O(n + k)\)

## Counting Sort  

<iframe width="560" height="315" src="https://www.youtube.com/embed/1mh2vilbZMg?si=hXwxflhJDLi3C5Ou" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Definition:**  
Counts the occurrences of each element and places them in the correct sorted position using a count array.  

=== "Java"

    ```java linenums="1"
    void countingSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
        int range = max - min + 1;

        int[] count = new int[range];
        int[] output = new int[arr.length];

        for (int i = 0; i < arr.length; i++)
            count[arr[i] - min]++;

        for (int i = 1; i < count.length; i++)
            count[i] += count[i - 1];

        for (int i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
        }

        for (int i = 0; i < arr.length; i++)
            arr[i] = output[i];
    }
    ```

**Time Complexity:**  
- **Big O:** \(O(n + k)\)  
- **Omega:** \(Ω(n + k)\)  
- **Theta:** \(Θ(n + k)\)

**Space Complexity:**  
\(O(k)\)
