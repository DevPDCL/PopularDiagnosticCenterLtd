import { styles } from "../styles";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  logo,
} from "../assets";
import {
  Card,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import video from "../assets/video.mp4";

function Login() {
  return (
    <section className="w-screen h-screen  relative  justify-center items-center mx-auto">
      <video
        className="h-full w-screen object-fill"
        src={video}
        autoPlay
        loop
        muted
      />

      <div className="absolute w-full h-full  top-0 left-0 bg-gray-900/50"></div>
      <div
        className={`${styles.paddingX} absolute  w-[400px] h-[600px] inset-0 justify-center bg-white items-center mx-auto  text-center flex flex-col text-[#006642]`}
      >
        <Card color="transparent" shadow={false}>
          <Link to="/">
            <img src={logo} className="w-[50px] h-[50px] mx-auto" />
          </Link>

          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to Login.
          </Typography>
          <form className="mt-8 mb-2 w-80 p-5 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 text-start"
              >
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 p-2 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 text-start"
              >
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 p-2 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Link to="/report">
              <Button className="mt-6 bg-[#006642] " fullWidth>
                sign in
              </Button>
            </Link>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/sign">
                <a href="#" className="font-medium text-gray-900">
                  Sign up
                </a>
              </Link>
            </Typography>
            <Typography
              color="gray"
              className="mt-4 text-center text-[blue] font-normal"
            >
              Forgot Password?
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Login;
