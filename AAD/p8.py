import YSL_io

def LCS(P, Q):
    s1, s2 = len(P), len(Q)
    dp = [[0] * (s2 + 1) for _ in range(s1 + 1)]

    for i in range(1, s1 + 1):
        for j in range(1, s2 + 1):
            if P[i - 1] == Q[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    i, j = s1, s2
    lcs = []

    while i > 0 and j > 0:
        if P[i - 1] == Q[j - 1]:
            lcs.append(P[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            i -= 1
        else:
            j -= 1

    return ''.join(str(y) for y in lcs[::-1])

# Demo inputs : 
#    P = "MNOAM" 
#    Q = "MLNOM"

P=YSL_io.inputCYN("\n\tEnter the first sequence P : ")
Q=YSL_io.inputCYN("\tEnter the second sequence Q : ")
YSL_io.printORNG('\n\tLongest Common Subsequence (LCS) : ', end='')
YSL_io.printRED(LCS(P, Q))