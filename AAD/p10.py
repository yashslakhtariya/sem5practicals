import YSL_io

def mcm(dmsns):
    n = len(dmsns) - 1
    dp = [[0] * n for _ in range(n)]
    parenthesization = [[0] * n for _ in range(n)]

    for chain_length in range(2, n + 1):
        for i in range(n - chain_length + 1):
            j = i + chain_length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + dmsns[i] * dmsns[k + 1] * dmsns[j + 1]
                if cost < dp[i][j]: 
                    dp[i][j] = cost
                    parenthesization[i][j] = k
        
    print('\nDP Matrix : \n')
    for i in range(n):
        for j in range(n):
            print(dp[i][j], end="\t\t")
        print()

    return dp[0][n - 1], optimal_parenthesization(parenthesization, 0, n - 1)


def optimal_parenthesization(parenthesization, i, j):
    if i == j:
        return f'A[{i + 1}]'
    else:
        k = parenthesization[i][j]
        left = optimal_parenthesization(parenthesization, i, k)
        right = optimal_parenthesization(parenthesization, k + 1, j)
        return f'({left}{right})'


n = int(YSL_io.inputGRN("\n\tEnter total matrices : "))
print()
dmsns = [0] * (n + 1)
for i in range(n):
    dmsns[i] = int(YSL_io.inputCYN(f"\tEnter no. of rows in matrix {i+1}: "))
dmsns[n] = int(YSL_io.inputCYN(f"\tEnter no. of columns in matrix {n}: "))

min_multiplications, parenthesization = mcm(dmsns)

YSL_io.printORNG("\n\tThe number of scalar multiplications : ", end='')
YSL_io.printRED(min_multiplications)
YSL_io.printORNG("\tOptimal parenthesization : ", end='')
YSL_io.printRED(parenthesization)
