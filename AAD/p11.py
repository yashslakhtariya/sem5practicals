import YSL_io

def knapsack(W, wt, val, n):
    k = [[0 for x in range(W + 1)] for x in range(n + 1)]

    for i in range(n + 1):
        for w in range(W + 1):
            if i == 0 or w == 0:
                k[i][w] = 0
            elif wt[i - 1] <= w:
                k[i][w] = max(val[i - 1] + k[i - 1][w - wt[i - 1]], k[i - 1][w])
            else:
                k[i][w] = k[i - 1][w]

    YSL_io.printBLU("\nMaximum profit : ", end='')
    print(k[n][W])
    YSL_io.printRED("\nKnapsack Matrix : ")
    for i in range(n + 1):
        for j in range(W + 1):
            YSL_io.printRED(f'{k[i][j]} ', end='')
        print()

    selected = []
    res = k[n][W]
    w = W
    i = n
    while i > 0 and res > 0:
        if res == k[i - 1][w]:
            i -= 1
        else:
            selected.append(wt[i - 1])
            res -= val[i - 1]
            w -= wt[i - 1]
            i -= 1
    YSL_io.printORNG("\nSelected knapsack(s) : ", end='')
    print(selected)



n = int(YSL_io.inputGRN("\nNumber of entries (n) : "))
W = int(YSL_io.inputGRN('\nMaximum capacity (W) : '))
print()
val = []
wt = []

for i in range(n):
     val.append(int(YSL_io.inputMGNTA(f"Enter the price {i+1} : ")))

print()
for i in range(n):
     wt.append(int(YSL_io.inputCYN(f"Enter the weight {i+1} : ")))

knapsack(W, wt, val, n)

