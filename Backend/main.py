from fastapi import FastAPI,File,UploadFile
from fastapi.responses import JSONResponse
import  pandas as pd
import openpyxl
import io
from pydantic import BaseModel
import mydatabase
 
app=FastAPI()

current_excel = None

@app.post("/upload")
async def upload_file(file: UploadFile=File(...)):


#     csv = pd.read_csv(io.BytesIO(file.file.read()))
#    # Convert DataFrame to Excel format
#     excel = io.BytesIO()
#     csv.to_excel(excel, index=False, engine='xlsxwriter')
#     excel.seek(0)
    global current_excel
    df=pd.read_excel(file.file , sheet_name=None)
    current_excel = df
    sheet_names=list(df.keys())
    print(sheet_names)
    dat={}
    dat['tables']=[]
 
    for i in range(len(sheet_names)):
        # dat['tables']=list(df[i].columns.values)
        col=[]
        for j in list(df[sheet_names[i]].columns.values):
            col.append({'id':f"s-{i}-{j}",'name':j})
        num_rows = len(df[sheet_names[i]])
        dat['tables'].append({'id': f"s-{i}",'name':sheet_names[i],'columns':col, 'noOfRows': num_rows})
    return JSONResponse(content={"response": dat})



@app.get("/getSourceJson")
def getSourceJson():
    print('hi')
    df = current_excel
    sheet_names=list(df.keys())
    print(sheet_names)
    dat={}
    dat['tables']=[]
 
    for i in range(len(sheet_names)):
        # dat['tables']=list(df[i].columns.values)
        col=[]
        for j in list(df[sheet_names[i]].columns.values):
            col.append({'id':f"s-{i}-{j}",'name':j})
        num_rows = len(df[sheet_names[i]])
        dat['tables'].append({'id': f"s-{i}",'name':sheet_names[i],'columns':col, 'noOfRows': num_rows})
    return JSONResponse(content={"response": dat})

@app.get("/getTargetJson")
def getTargetJson():
    return mydatabase.getTargetJson()


@app.get("/getMappings")
async def getMapping():
    column_mapping = {}
    column_mapping['mappings'] = [{'source' : 1, 'target' : 2}]
    column_mapping['unmapped'] = []

    return JSONResponse(content= {"response" : column_mapping})
 
@app.get("/get")
async def get_name():
 
    return JSONResponse(content= {"message" : "hii everyone"})


@app.get("/login")
def login(username: str, password: str):
    # return JSONResponse(content= {"message" : mydatabase.getLogin(username, password)})
    if(mydatabase.getLogin(username, password)):
        return JSONResponse(content= {"message" : "user authenticated successfully"})
    else:
        return JSONResponse(content= {"message" : "Username or password Failed"})
    

