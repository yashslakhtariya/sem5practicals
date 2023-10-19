import YSL_io

def heapify(q, n, i):
     root = i
     l = 2*i + 1
     r = 2*i + 2

     if (l < n) and (q[root] > q[l]):
          root = l
     if (r < n) and (q[root] > q[r]):
          root = r
     if root != i:
          (q[i], q[root]) = (q[root], q[i])
          heapify(q, n, root)
def heapSort(q):
     n = len(q)
     for i in range(n // 2 - 1, -1, -1):
          heapify(q, n, i)
     for i in range(n - 1, 0, -1):
          (q[i], q[0]) = (q[0], q[i])
          heapify(q, i, 0)
def insert(q,prob):
     q += [prob]
     heapSort(q)
class node:
     def __init__(self, prob=None):
          self.prob = prob
          self.left = None
          self.right = None
def huffman(c):
     n = len(c)
     q = []
     x = []
     y = []
     for i in c:
          q += [i[1]]
     heapSort(q)
     for i in range(1, n):
          z = node()
          z.left = q.pop()
          x += [z.left]
          z.right = q.pop()
          y += [z.right]
          z.prob = round(z.left + z.right, 3)
          insert(q, z.prob)
     return x,y
char = list(map(str, YSL_io.inputGRN("\n\tEnter unique characters : ").split(' ')))
f = list(map(float, YSL_io.inputCYN("\tEnter their probabilities : ").split(' ')))
c = []
for i, j in zip(char, f):
     c += [list([i, j])]
YSL_io.printRED(f'\tProbability of characters : {c}')
x, y = huffman(c)
YSL_io.printBLU(f"\n\tx : {x}")
YSL_io.printORNG(f"\ty : {y}")