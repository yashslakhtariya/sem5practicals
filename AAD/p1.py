from YSL_io import *
from array import *


def compare(a, b):
    p1 = 0
    p2 = 0
    for one in range(len(a)):
        for two in range(len(b)):
            if one == two:
                if a[one] > b[two]:
                    p1 = p1 + 1
                elif a[one] < b[two]:
                    p2 = p2 + 1
                else:
                    pass
    return p1, p2


# a1 = int(inputGRN('\nEnter presentation score of Chef-1 : '))
# a2 = int(inputGRN('Enter taste score of Chef-1 : '))
# a3 = int(inputGRN('Enter hygiene score of Chef-1 : '))

# b1 = int(inputMGNTA('\nEnter presentation score of Chef-2 : '))
# b2 = int(inputMGNTA('Enter taste score of Chef-2 : '))
# b3 = int(inputMGNTA('Enter hygiene score of Chef-2 : '))

# a = array('I', [a1, a2, a3])
# b = array('I', [b1, b2, b3])

n = int(inputORNG('\nEnter number of categories to compare : '))
a = array('I', range(n))
b = array('I', range(n))

print()
for i in range(n):
    a[i] = int(inputGRN(f'Enter category-{i + 1} score of Chef-1 : '))
print()
for i in range(n):
    b[i] = int(inputMGNTA(f'Enter category-{i + 1} score of Chef-2 : '))

p1, p2 = compare(a, b)

print('\nTotal score of Chef-1 : ', end='')
printORNG(p1)

print('Total score of Chef-2 : ', end='')
printORNG(p2)
