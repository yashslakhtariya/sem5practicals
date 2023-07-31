import random
import matplotlib.pyplot as plt
from matplotlib import use
use('GTK3Agg')
import YSL_io as YSL

# Insertion Sort
def insrtn_sort(ysl):
    n = len(ysl)
    count = 0
    for i in range(1, n):
        key = ysl[i]
        j = i - 1
        while j >= 0 and key < ysl[j]:
            ysl[j + 1] = ysl[j]
            j -= 1
            count += 1
        ysl[j + 1] = key
    return count


# Bubble Sort
def bble_sort(ysl):
    n = len(ysl)
    count = 0
    for i in range(n):
        flag = False
        for j in range(0, n - i - 1):
            count += 1
            if ysl[j] > ysl[j + 1]:
                ysl[j], ysl[j + 1] = ysl[j + 1], ysl[j]
                flag = True
        if not flag:
            break
    return count


# Selection Sort
def slctn_sort(ysl):
    n = len(ysl)
    count = 0
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            count += 1
            if ysl[j] < ysl[min_index]:
                min_index = j
        ysl[i], ysl[min_index] = ysl[min_index], ysl[i]
    return count


# Function to plot the comparison graph for a data category
def compare(size, algos, labels, colors, data_category="random"):
    plt.figure()
    plt.xlabel("Data Size")
    plt.ylabel("Count of Iterations")
    plt.title(f"\nSorting Algorithm Comparison for {data_category} data\n", fontsize=15)

    for i, algo in enumerate(algos):
        iterations = []
        for s in size:
            data = [random.randint(1, 100) for y in range(s)]
            if data_category == "ascending":
                data.sort()
            elif data_category == "descending":
                data.sort(reverse=True)
            iterations.append(algo(data))
            # print(f'\n{data}')

        plt.plot(size, iterations, marker="o", label=labels[i], color=colors[i]) 
        if i==0:
            YSL.printGRN(f'\nFor {data_category.capitalize()} data, number of iterations using {labels[i]} for sizes - {size}', end=' : ')
            print(iterations)
        elif i==1:
            YSL.printORNG(f'For {data_category.capitalize()} data, number of iterations using {labels[i]} for sizes - {size}', end=' : ')
            print(iterations)
        else:
            YSL.printBLU(f'For {data_category.capitalize()} data, number of iterations using {labels[i]} for sizes - {size}', end=' : ')
            print(iterations)

    plt.legend()
    plt.grid(True)


size = [10, 20, 30, 50, 80]

algos = [insrtn_sort, bble_sort, slctn_sort]
methods = ["Insertion Sort", "Bubble Sort", "Selection Sort"]

colors = ["#a347ba", "#5e81cc", "#b75969"]

compare(size, algos, methods, colors, "ascending")
compare(size, algos, methods, colors, "descending")
compare(size, algos, methods, colors)


plt.show()
