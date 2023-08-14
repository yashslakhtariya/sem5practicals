import pandas as pd
import YSL_io

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
data=pd.read_csv('./p7.2_data.csv')
print()
YSL_io.printGRN(data.set_index('id'))

salary=list(data['salary'])
max_sal=max(data['salary'])
max_sal_lin=lnr(salary,max_sal)
max_sal_bin=bnry(sorted(salary),max_sal)
desgn=data.loc[data['salary']==max_sal]['designation'].iloc[0]
YSL_io.printMGNTA('\nDesignation of Employee with Maximum Salary : ')
print(f'\tMaximum Salary: {max_sal}')
print(f'\tDesignation: {desgn}')
print(f'\tLinear Search Count: {max_sal_lin}')
print(f'\tBinary Search Count: {max_sal_bin}')
print()

min_sal=min(data['salary'])
min_sal_lin=lnr(salary,min_sal)
min_sal_bin=bnry(sorted(salary),min_sal)
name=data.loc[data['salary']==min_sal]['name'].iloc[0]
YSL_io.printRED('Name of Employee with Minimum Salary : ')
print(f'\tMinimum Salary: {min_sal}')
print(f'\tName of Employee: {name}')
print(f'\tLinear Search Count: {min_sal_lin}')
print(f'\tBinary Search Count: {min_sal_bin}')
print()

age=list(data['age'])
min_age=min(data['age'])
min_age_lin=lnr(age,min_age)
min_age_bin=bnry(sorted(age),min_age)
contact=data.loc[data['age']==min_age]['contact'].iloc[0]
YSL_io.printBLU('Mobile Number of Youngest Employee : ')
print(f'\tMinimum Age: {min_age}')
print(f'\tMobile Number of Employee: {contact}')
print(f'\tLinear Search Count: {min_age_lin}')
print(f'\tBinary Search Count: {min_age_bin}')
print()

max_age=max(data['age'])
max_age_lin=lnr(age,max_age)
max_age_bin=bnry(sorted(age),max_age)
salary1=data.loc[data['age']==max_age]['salary'].iloc[0]
YSL_io.printGRN('Salary of Oldest Employee : ')
print(f'\tMaximum Age: {max_age}')
print(f'\tSalary of Employee: {salary1}')
print(f'\tLinear Search Count: {max_age_lin}')
print(f'\tBinary Search Count: {max_age_bin}')
print()
