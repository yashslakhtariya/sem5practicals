import matplotlib
import matplotlib.pyplot as plt
import YSL_io

matplotlib.use('QtAgg')

def bnry(ysl,x,c=0):
     c+=1
     n=len(ysl)
     mid=int(n//2)
     if x==ysl[mid]:
          return c
     elif x<ysl[mid]:
          return bnry(ysl[:mid],x,c)
     elif x>ysl[mid]:
          return bnry(ysl[mid:],x,c)

def lnr(ysl,x):
     c=0
     for i in ysl:
          c+=1
          if x==i:
               break
     return c

ysl=list(range(1000))
data=list(range(0,1000, 50))
l_count=[]
b_count=[]
for i in data:
     a=lnr(ysl,i)
     l_count.append(a)
     b=bnry(ysl,i)
     b_count.append(b)
     
YSL_io.printRED("\nData :",end=' ')
print(data)
YSL_io.printBLU("Linear Search Count :",end=' ')
print(l_count)
YSL_io.printGRN(f"Binary Search Count :",end='')
print(b_count)

plt.plot(data,l_count,marker='o',label='Linear Search', color='#dd7878', linewidth=3)
plt.plot(data,b_count,marker='o',label='Binary Search', color='#7b7aaa', linewidth=3)
plt.legend()
plt.title("Linear vs Binary Search Comparison", fontsize=10)
plt.xlabel('Data')
plt.ylabel('Counts of iterations')
print()
plt.show()