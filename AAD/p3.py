import matplotlib.pyplot as plt
import YSL_io as YSL

def loop(n):
    cnt = 0
    sum = 0
    for i in range(1, n + 1):
        sum += i
        cnt += 1
    return cnt


def eq(n):
    return 1


def rcrsn(n):
    if n == 1:
        return 1
    else:
        return 2 + rcrsn(n - 1)


def cmp():
    counts = []
    inpt = [5, 10, 15, 20]
    fn = ['Sum using loop', 'Sum using equation', 'Sum using recursion']
    colors = ['#a347ba', '#5e81cc', '#b75969']

    for i in range(3):  # Three functions to compare
        for n in inpt:
            if i == 0:
                counts.append(loop(n))
            elif i == 1:
                counts.append(eq(n))
            else:
                counts.append(rcrsn(n))
        plt.plot(inpt, counts, label=fn[i], color=colors[i], linewidth=5)

    plt.xlabel('Input Size (n)')
    plt.ylabel('Count')
    plt.title('Comparison of time complexities')
    plt.legend()
    plt.show()
    print(f'The counts in each methods of summation are : ')
    

cmp()
