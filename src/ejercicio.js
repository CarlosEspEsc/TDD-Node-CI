function fibonacci(n) {
    if (n <= 0) 
        RangeError("solo números enteros ≥ 0")
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;

    return Math.fibonacci(n);
}