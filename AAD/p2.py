from YSL_io import *

def closetozero(y):
     if len(y) > 2:
          sum = y[0] + y[1]
          ans = [y[0], y[1]]
          alt = []

          for i in range(len(y)):
               for j in range(i + 1, len(y)):
                    curr = y[i] + y[j]
                    if abs(curr) <= abs(sum):
                         if abs(curr) < abs(sum):
                              sum = curr
                              ans = [y[i], y[j]]
                         else:
                              sum = curr
                              alt.append([y[i], y[j]])
          return ans, alt

y = [25, 15, 5, -20, 30, -45, 50, -55]
ans, alt = closetozero(y)
alt.pop(0)

if len(alt) == 0 :
     print('\nThe required numbers whose sum is closest to zero are : ', end='')
     printGRN(f'{ans[0]} and {ans[1]}')
else :
     print('\nThe required numbers whose sum is closest to zero are : ', end='')
     printGRN(f'{ans[0]} and {ans[1]}', end=', ')
     for elem in alt:
          if elem == alt[-1]:
               printGRN(f'{elem[0]} and {elem[1]}')
          else :
               printGRN(f'{elem[0]} and {elem[1]}', end=', ')