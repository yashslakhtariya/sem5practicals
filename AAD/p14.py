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
                    YSL_io.printCYN('\n\tPossible solution : \n')
                    disQ(n)
               else:
                    queens(r+1, n)
                    
def disQ(n):
     global q
     board = np.empty((len(q)-1, len(q)-1), dtype=str)
     for i in range(len(q)-1):
          if (i % 2 == 0):
               for j in range(0,len(q)-1,2):
                    board[i,j] = '⬜'
               for j in range(1,len(q)-1,2):
                    board[i,j] = '⬛'
          else:
               for j in range(1,len(q)-1,2):
                    board[i,j] = '⬜'
               for j in range(0,len(q)-1,2):
                    board[i,j] = '⬛'
     board = np.reshape(board, (len(q)-1, len(q)-1))
     for i in range(1,len(q)):
          board[i-1, q[i]-1] = '👑'
     for i in range(len(q)-1):
          for j in range(len(q)-1):
               if j % n == 0: # to display with '\t' at each line of board
                    print('\t' + board[i, j], end='')
               else:
                    print(board[i, j], end='')
          print()
          
n = int(YSL_io.inputORNG("\n\tPlease input the number of queens: "))
q = [0 for _ in range(n+1)]

queens(1, n)