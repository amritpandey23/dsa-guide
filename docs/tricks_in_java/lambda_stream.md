# Tricks with Lambda Expression and Streams

### Collect objects from an arraylist to another based on some condition

```java
public class Trick1 {
    public static void main(String[] args) {
        List<Pair> oldList = new ArrayList<>();
        oldList.add(new Pair(1, 2));
        oldList.add(new Pair(0, 2));
        oldList.add(new Pair(3, 2));
        oldList.add(new Pair(4, 3));

        // collect all pairs having x >= 1
        List<Pair> newList = oldList.stream().
            .collect(Collectors.filtering(p -> p.x >= 1, Collectors.toList()));
    }

    static class Pair {
        public int x;
        public int y;

        public Pair(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
}
```
