from termcolor import colored

def printClr(y, color, end='\n'):
     print(colored(y, color), end=end)
     
printClr('\n\tHare Krishna', 'cyan')
printClr('\tHare Krishna', 'cyan')
printClr('\tKrishna Krishna', 'cyan')
printClr('\tHare Hare', 'cyan')

printClr('\n\tHare Rama', 'magenta')
printClr('\tHare Rama', 'magenta')
printClr('\tRama Rama', 'magenta')
printClr('\tHare Hare', 'magenta')