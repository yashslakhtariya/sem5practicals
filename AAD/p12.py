import YSL_io

def f_knpsck(n, W, P, w):
    ratios = []
    profit = 0
    picked = [0] * n

    for i in range(n):
        ratio = P[i] / w[i]
        ratios.append((i, ratio, P[i], w[i]))

        ratios.sort(key=lambda x: -x[1])

    YSL_io.printCYN("\n\tRatio", end=", ")
    YSL_io.printGRN("Profit", end=", ")
    YSL_io.printCYN("Weight", end=", ")
    YSL_io.printGRN("Fraction")

    for i in range(n):
        index, ratio, value, weight = ratios[i]
        if W > 0 and weight <= W:
            fraction = 1.0
        else:
            fraction = W / weight
        picked[index] = fraction
        #    print(f"\t{round(ratio, 3)}, {value}, {weight}, {round(fraction, 3)}")
        YSL_io.printCYN(f"\t{round(ratio, 3)}", end=",  ")
        YSL_io.printGRN(value, end=",  ")
        YSL_io.printCYN(weight, end=",  ")
        YSL_io.printGRN(round(fraction, 3))

        if fraction == 1.0:
            W -= weight
            profit += value
        else:
            profit += fraction * value
            break

    return round(profit, 3), [round(n, 3) for n in picked]


n = int(YSL_io.inputORNG("\n\tNumber of artifacts : "))
W = int(YSL_io.inputRED("\tKnapsack max capacity : "))
P = []
w = []

print()
for i in range(n):
    P.append(int(YSL_io.inputBLU(f"\tValue of artifact-{i+1} : ")))

print()
for i in range(n):
    w.append(int(YSL_io.inputMGNTA(f"\tWeight of artifact-{i+1} : ")))

maxp, picked = f_knpsck(n, W, P, w)
YSL_io.printRED("\n\tMax profit", end=' : ')
print(maxp)
YSL_io.printORNG("\tFraction of selected items", end=' : ')
print(picked)
