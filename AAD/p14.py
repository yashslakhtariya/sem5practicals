import numpy as np
import YSL_io

def possible(r2, c2):
     global q
     for r1 in range(1, r2):
          c1 = q[r1]
          if (c1 == c2) or (abs(r1 - r2) == abs(c1 - c2)):
               return False
     return True

def queens(r, n):
     global q
     for c in range(1, n+1):
          if (possible(r, c)):
               q[r] = c
               if (r == n):
                    print('One of the possible ways: ')
                    disQ()
                    print()
               else:
                    queens(r+1, n)
                    
def disQ():
     global q
     chb = np.empty((len(q)-1, len(q)-1), dtype=str)
     for i in range(len(q)-1):
          if (i % 2 == 0):
               for j in range(0,len(q)-1,2):
                    chb[i,j] = '⬜'
               for j in range(1,len(q)-1,2):
                    chb[i,j] = '⬛'
          else:
               for j in range(1,len(q)-1,2):
                    chb[i,j] = '⬜'
               for j in range(0,len(q)-1,2):
                    chb[i,j] = '⬛'
     chb = np.reshape(chb, (len(q)-1, len(q)-1))
     for i in range(1,len(q)):
          chb[i-1, q[i]-1] = '👑'
     for i in range(len(q)-1):
          for j in range(len(q)-1):
               print(chb[i, j], end=' ')
          print()
          
n = int(input("Please input the number of queens: "))
q = [0 for _ in range(n+1)]

queens(1, n)