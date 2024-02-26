import mysql.connector

def getTargetJson():
    mysqdb = mysql.connector.connect(host="localhost", user="root", password="#your password here", 
    database="target",auth_plugin='mysql_native_password')
 
    cursor=mysqdb.cursor()
 
    cursor.execute("show tables;")
    tables=[table[0] for table in cursor.fetchall()]
    print(tables)
 
# cursor.execute("")
    dat={}
    dat['tables']=[]
 
    for i in range(len(tables)):
      qry1=f"describe {tables[i]}"
      cursor.execute(qry1)
      column_name=[columns[0] for columns in cursor.fetchall()]
      qry2=f'select count(*) as count from  {tables[i]}'
      cursor.execute(qry2)
      values = cursor.fetchone()
      noOfRows = values[0]
      col=[]
      print(col)
      for j in column_name:
        col.append({'id':f"t-{i}-{j}",'name':j})
      dat['tables'].append({'id':f"t-{i}",'name':tables[i],'columns':col, 'noOfRows': noOfRows})
    return dat

def getLogin(username, password):
    mysqdb = mysql.connector.connect(host="localhost", user="root", password="#your password here", 
    database="user",auth_plugin='mysql_native_password')
 
    cursor=mysqdb.cursor( )
    qry1=f"select user_password from user_details where user_name = {username}"
    cursor.execute(qry1)
    values = cursor.fetchone()
    password1 = values[0] if values else 0
    if(password1 != 0):
       password1 = values[0]
       if(password == password1):
        return True
       else:
        return False
    else:
      return False
    
