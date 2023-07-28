import matplotlib.pyplot as plt
from matplotlib import use
use('GTK3Agg')
import YSL_io as YSL

def rcrsn(n):
     if n == 0 or n == 1:
          return n, 1
     else:
          left, left_count = rcrsn(n - 1)
          right, right_count = rcrsn(n - 2)
          return left + right, left_count + right_count + 1

def loop(n):
     count = 1
     a, b = 0, 1

     if n == 0 or n == 1:
          return n, count

     for i in range(n - 1):
          a, b = b, a + b
          count += 1

     return b, count

n = int(YSL.inputGRN("\nEnter nth term to get Fibonacci sequence : "))
YSL.printORNG("\nFibonacci Series: ", end=" ")

count_r = []
count_l = []
fibonacci_sequence = []

for i in range(1, n + 1):
     result, recursion_count = rcrsn(i)
     count_r.append(recursion_count)

     result, loop_count = loop(i)
     count_l.append(loop_count)
     fibonacci_sequence.append(result)
     print(result, end=" ")

data = list(range(1, n + 1))
plt.plot(data, count_l, "-o", label="Iterative Count", color='#d18677', linewidth=5, markersize=10)
plt.plot(data, count_r, "-o", label="Recursion Count", color='#7b7aaa', linewidth=5, markersize=10)
YSL.printMGNTA(f'\n\nCounts for {n} terms using loop : ', end='')
print(count_l)
YSL.printBLU(f'\nCounts for {n} terms using recursion : ', end='')
print(count_r)
plt.xlabel("Range of terms", fontsize=15)
plt.ylabel("Number of Iterations", fontsize=15)
plt.title("Counts of iterations using Recursion and Iterative method to find Fibonacci Series\n", fontsize=18)
plt.legend()
plt.grid(True)
plt.show()
