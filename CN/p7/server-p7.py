import socket
import YSL_io

def server_program():
    host = socket.gethostname()
    port = 4200 # initiate port no above 1024
    server_socket = socket.socket() # get instance
    server_socket.bind((host, port)) # bind host address and port together
    server_socket.listen(2)
    conn, address = server_socket.accept() # accept new connection
    YSL_io.printCYN(f'\nConnection from client :  {str(address)}\n')
    str1 = ''
    str2 = ''
    while str2.lower().strip() != 'work is done':
        str1 = conn.recv(1024).decode()
        if not str1:
            # if data is not received break
            break
        YSL_io.printBLU('\tClient : ' + str(str1))
        str2 = YSL_io.inputGRN('\t-> ')
        conn.send(str2.encode())
    conn.close()
server_program()