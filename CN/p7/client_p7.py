import socket
import YSL_io

def client_program():
     host = socket.gethostname()
     port = 4200  # socket server port number
     client_socket = socket.socket()
     client_socket.connect((host, port))  # connect to the server
     str1 = YSL_io.inputGRN('\n\t-> ')  # take input
     while str1.lower().strip() != 'work is done':
          client_socket.send(str1.encode())  # send message
          str2 = client_socket.recv(1024).decode()  # receive response
          if str2.lower().strip() == 'work is done':
               client_socket.close()  # close the connection
               break
          else:
               YSL_io.printRED('\tServer : ' + str2)  # show in terminal
               str1 = YSL_io.inputGRN('\t-> ')  # again take input
client_program()
