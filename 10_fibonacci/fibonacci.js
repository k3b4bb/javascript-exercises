function fibonacci(n) {
  // Convert input to number if it's a string
  n = parseInt(n);
  
  // Check for negative input
  if (n < 0) return "OOPS";
  
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // Calculate Fibonacci number
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = fibonacci;