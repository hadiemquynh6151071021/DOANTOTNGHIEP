"use client";
import Image from "next/image";
import userImgSrc from "./assets/login_01.png";
import { HTMLInputTypeAttribute, useState } from "react";
import Link from "next/link";
import { Button, Checkbox, FormControl, FormControlLabel, TextField } from "@mui/material";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import accountAPI from "@/apis/account";
import { checkPermission } from "@/models/Token";
const jwt = require("jsonwebtoken")

// export function checkPermission(token: string | null): boolean {
//   if (!token) return false;
//   try {
//       const listRole = jwt.decode(token);
//       console.log(listRole);
//       const subArray = listRole.sub.slice(1,-1).split(', ');
//       console.log(subArray);
//       {
//         subArray.map(role =>{
//           if(role === 'Trưởng nhóm'){
//             alert("Đây là trưởng nhóm")
//           }
//           else if(role === 'Trưởng phòng'){
//             alert("Đây là trưởng phòng")
//           }
//         })
//       }
//       return ;
//   } catch (error) {
//       console.error('Lỗi khi giải mã token:', error);
//       return false;
//   }
// }

export function isTokenExpired(token: string | null) {
    if (!token) {
      return false;
    }
    else{
      const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);
    const expirationTime = payload.exp * 1000; // Thời gian hết hạn của token (được tính bằng giây, cần chuyển đổi thành miligiây)
    return Date.now() > expirationTime; // Trả về true nếu thời gian hiện tại lớn hơn thời gian hết hạn của token, ngược lại trả về false
    }
}

// export function checkTokenExpired(router) {
//   const token = localStorage.getItem('accessToken');
//   if (!token || isTokenExpired(token)) {
//     router.push('');
//   }
// }



export default function LoginSection() {
  const router = useRouter();
  const setLoading = useLoadingAnimation();
  const setAlert = useAlert();

  const [isRemembered, setIsRemembered] = useState(false);
  const [inputs, setInputs] = useState<{
    [key: string]: { label: string; value: string; type: HTMLInputTypeAttribute };
  }>({
    username: {
      label: "Tên đăng nhập",
      value: "",
      type: "text",
    },
    password: {
      label: "Mật khẩu",
      value: "",
      type: "password",
    },
  });

  async function handleLogin() {
    setLoading(true);
    try {
      
      const response = await accountAPI.login(inputs["username"].value, inputs["password"].value);
      const token = response.token;
      const listRole = jwt.decode(token);
      console.log(listRole);
      // const roles = response.roles;
      // localStorage.removeItem('accessToken');
      localStorage.setItem('fullName', listRole.username);
      localStorage.setItem('employeeId', listRole.employeeId);
      localStorage.setItem('token', token);
      // const token1 = localStorage.getItem('accessToken');
		  // alert(token1);


      
      //const token1 = localStorage.getItem('token');
      // console.log(token1);
      // localStorage.removeItem('accessToke');
      // const token2 = localStorage.getItem('accessToken');
      // console.log(token2);
      //console.log(checkPermission(token1))
      //alert(hasPermission)
    //   if (!token || !hasPermission) {
    //     alert("AAAAAAAAAAAAAAAAa")
    //   // Chuyển hướng người dùng đến trang không có quyền truy cập
    router.push('/home');
    // }
    // else{
    //   alert("BBBBBBBBBBBBBbb")
    // }
      

      setAlert({
        message: "Đăng nhập thành công!",
        severity: "success",
      });
    } catch (ex) {
      setAlert({
        message: "Đăng nhập thất bại",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-5/12 p-10 flex flex-col gap-14">
      <h2 className="pt-10 flex flex-col items-center gap-4 text-2xl text-center font-semibold">
        <div className="w-28 ">
          <Image className="w-full" src={userImgSrc} alt="user login" />
        </div>
      </h2>
      <FormControl className="flex flex-col gap-4 ">
        {Object.keys(inputs).map((key: string) => (
          <TextField
            key={key}
            fullWidth
            variant="outlined"
            {...inputs[key]}
            onChange={(e) => {
              setInputs({
                ...inputs,
                [key]: {
                  ...inputs[key],
                  value: e.target.value,
                },
              });
            }}
          />
        ))}
        <div className="mt-2 flex items-center justify-between">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Nhớ mật khẩu"
            value={isRemembered}
            onChange={() => setIsRemembered(!isRemembered)}
          />
          <Link className="underline text-blue-400" href={""}>
            Quên mật khẩu
          </Link>
        </div>
      </FormControl>
      <section className="mt-auto flex flex-col gap-6 ">
        <Button
          color="primary"
          className="h-12 font-bold text-md"
          variant="contained"
          onClick={handleLogin}
        >
          Đăng nhập
        </Button>
      </section>
    </section>
  );
}
