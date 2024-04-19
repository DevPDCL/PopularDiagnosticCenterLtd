import { styles } from "../styles";
import React from "react";
import { Link } from "react-router-dom";
import {
  logo,
  
} from "../assets";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import video from "../assets/video.mp4";
function Sign() {
  return (
    <section className="w-screen h-[1500px]  relative  justify-center items-center mx-auto">
      <video
        className="h-[1500px] w-screen object-fill"
        src={video}
        autoPlay
        loop
        muted
      />

      <div className="absolute w-full h-full  top-0 left-0 bg-gray-900/50"></div>
      <div
        className={`${styles.paddingX} absolute  w-[400px] h-auto inset-0 justify-center bg-white items-center mx-auto  text-center flex flex-col text-[#006642]`}
      >
        <Card color="transparent" shadow={false}>
          <Link to="/">
            <img src={logo} className="w-[50px] h-[50px] mx-auto" />
          </Link>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="p-5 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="fullname"
                className=" !border-t-blue-gray-200 p-2 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
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
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Gender
              </Typography>
              <Card className="w-full max-w-[24rem]">
                <List className="flex-row">
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-react"
                      className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-react"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Male
                      </Typography>
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="horizontal-list-vue"
                      className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id="horizontal-list-vue"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        Female
                      </Typography>
                    </label>
                  </ListItem>
                </List>
              </Card>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
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
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Date of Birth
              </Typography>
              <Input
                type="Date"
                size="lg"
                placeholder="10/10/10"
                className=" !border-t-blue-gray-200 p-2 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Blood Group
              </Typography>
              <div className="w-full">
                <Select label="Select Version">
                  <Option>O+</Option>
                  <Option>O-</Option>
                  <Option>A+</Option>
                  <Option>A-</Option>
                  <Option>AB+</Option>
                  <Option>AB-</Option>
                  <Option>B+</Option>
                  <Option>B-</Option>
                </Select>
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Mobile Number
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="01712345678"
                className=" !border-t-blue-gray-200 p-2 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                NId
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="6215346754"
                className=" !border-t-blue-gray-200 p-2 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nationality
              </Typography>
              <div className="w-full">
                <Select label="Select Version">
                  <Option>Bangladesh</Option>
                  <Option>Other</Option>
                </Select>
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Country of residence
              </Typography>
              <div className="w-full pb-5">
                <Select label="Select Version">
                  <Option>Bangladesh</Option>
                  <Option>Other</Option>
                </Select>
              </div>
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
            <Button className="mt-6 bg-[#006642] " fullWidth>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login">
                <a href="#" className="font-medium text-gray-900">
                  Sign In
                </a>
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Sign;
