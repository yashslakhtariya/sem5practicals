import YSL_io

def coin_change(coins, target):
    dp = [[float('inf')] * (target + 1) for _ in range(len(coins))]
    combinations = [[[] for _ in range(target + 1)] for _ in range(len(coins))]

    for i in range(len(coins)):
        dp[i][0] = 0

    for i in range(len(coins)):
        for j in range(1, target + 1):
            if coins[i] > j:
                dp[i][j] = dp[i - 1][j]
                combinations[i][j] = combinations[i - 1][j]
            else:
                if dp[i][j - coins[i]] + 1 < dp[i - 1][j]:
                    dp[i][j] = dp[i][j - coins[i]] + 1
                    combinations[i][j] = combinations[i][j - coins[i]] + [coins[i]]
                else:
                    dp[i][j] = dp[i - 1][j]
                    combinations[i][j] = combinations[i - 1][j]

    return dp[len(coins) - 1][target], combinations[len(coins) - 1][target]


coins = [1, 4, 6]
target = int(YSL_io.inputCYN("\n\tEnter the total target value : "))
min_coins, coin_combinations = coin_change(coins, target)
YSL_io.printORNG("\n\tCoins used for target : ", end='')
YSL_io.printRED(coins)
YSL_io.printORNG("\tMinimum coins required : ", end='')
YSL_io.printRED(min_coins)
YSL_io.printORNG("\tCoin Combinations for target value ", end='')
YSL_io.printBLU(f'{target} : ', end='')
YSL_io.printRED(coin_combinations, end='\n')