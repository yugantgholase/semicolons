import React, {useState} from "react";
import img from "../images/logo.png";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const navigate = useNavigate();

  const login = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/login?username='${email}'&password=${password}`)
    
    if(response.data.message === 'user authenticated successfully'){
      navigate("/upload")
      console.log(response)
    }
    else{
      window.alert("Wrong username or password")
    }
  }
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  return (
    <div className="absolute top-[20%] left-[35%]">
      <Card className="w-96">
        {/* <CardHeader variant="gradient" color="orange" className="r">
          <Typography variant="h3" color="white">
            Persistent
          </Typography>
        </CardHeader> */}
        <CardBody className="flex flex-col gap-4">
          <div>
            <img src={img} alt="logo" className="h-9 inline" />
            <span className="px-2 font-bold text-lg">Persistent</span>
          </div>
          <Input label="Email" size="lg" onChange={(e)=>{setEmail(e.target.value)}}/>
          <Input label="Password" size="lg"  onChange={(e)=>{setPassword(e.target.value)}}/>
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          
            <Button variant="gradient" fullWidth color="orange" onClick={login}>
              Sign In
            </Button>
          
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
