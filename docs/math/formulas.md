## Greatest Common Divisor

```java
class GCD {
    public int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return (b, a % b);
    }

    public int gcdIter(int a, int b) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
        return a;
    }
}
```