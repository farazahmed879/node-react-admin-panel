"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import CustomInput from "@/components/customInput/page";
import CustomPasswordInput from "@/components/customPasswordInput/page";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const initialValues: any = {
    username: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: "onBlur",
    // resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (dat: any) => {
    let payload = {
      email: dat?.email,
      password: dat?.password,
    };

    try {
      const response = await axios.post("http://localhost:8080/login", payload);
      const { token, bntype } = response.data;
      console.log("response", response);
      localStorage.setItem("Bearer", token);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("error ", error);
      if (typeof error.response === "undefined") {
        alert("External server not available");
        return;
      } else if (error?.response?.status === 401) {
        console.log(error?.response);
        alert(error?.response.data.message);
      } else if (error.response.status === 404) {
        console.log("No such user found");
        alert("Email or Password is invalid");
      } else {
        console.log("Internal Server Error");
        alert("External server error");
      }
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      //   style={{ minHeight: "100vh" }}
      sx={{ mt: "20vh" }}
    >
      <Grid item xs={12}>
        <Card sx={{ bgcolor: "#f7f7f7", color: "#18181b", maxWidth: 650 }}>
          <CardContent>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                    Login
                  </Typography>
                  <Typography sx={{ fontSize: "15px" }}>
                    To enjoy Frontend project
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    control={control}
                    name="email"
                    required={true}
                    label="Email"
                    errors={errors}
                    type="string"
                    showAdornment={false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomPasswordInput
                    control={control}
                    name="password"
                    required={true}
                    label="Password"
                    errors={errors}
                    type={showPassword ? "text" : "password"}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    showAdornment={true}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    // onClick={() => router.push("/dashboard")}
                    sx={{
                      width: "100%",
                      background: "#EE4950",
                      color: "#18181b",
                      fontSize: "16px",
                      fontWeight: "bold",
                      "&:hover": {
                        background: "#e53e3e",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ fontSize: "14px", textAlign: "center" }}
                >
                  <Typography sx={{ fontSize: "14px", color: "#18181b" }}>
                    OR
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#18181b" }}>
                    Continue without Logging in
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "14px", color: "#18181b" }}>
                    Don't have an account yet?{" "}
                    <span
                      style={{ color: "#EE4950", cursor: "pointer" }}
                      onClick={() => router.push("/register")}
                    >
                      Register
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
