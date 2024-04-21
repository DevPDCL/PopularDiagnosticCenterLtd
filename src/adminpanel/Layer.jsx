import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import logo1 from "../assets/logo1.png";
import { Link } from "react-router-dom";
const Layer = () => {
 const [open, setOpen] = React.useState(0);
 const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

 const handleOpen = (value) => {
   setOpen(open === value ? 0 : value);
 };

 const openDrawer = () => setIsDrawerOpen(true);
 const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className=" h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <div className="absolute z-20 bg-white">
        <Drawer
          className="  bg-gray-100"
          open={isDrawerOpen}
          onClose={closeDrawer}
        >
          <Card
            shadow={false}
            className="h-screen rounded-none w-full  p-4 overflow-auto"
          >
            <Link to="/home">
              {" "}
              <div className="mb-2 flex items-center gap-4 p-4">
                <img src={logo1} alt="brand" className="h-10 w-10" />
                <Typography variant="h5" color="blue-gray">
                  PDCL ADMIN
                </Typography>
              </div>
            </Link>
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      PDCL Dashboard
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <Link to="/appointment">
                      {" "}
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Appointments
                      </ListItem>
                    </Link>
                    <Link to="/csample">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Collected Samples
                      </ListItem>
                    </Link>
                    <Link to="/ccomplain">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Collected Complains
                      </ListItem>
                    </Link>
                    <Link to="/management">
                      {" "}
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Management Team
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 2 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Doctors
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Add Doctors
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      View Doctors
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 3}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 3 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 3}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Pataints
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Add Pataints
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      View Pataints
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 4}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 4 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 4}>
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Branches
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Add Branches
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      View Branches
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 5}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 5 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 5}>
                  <AccordionHeader
                    onClick={() => handleOpen(5)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Notices
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Add Notices
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      View Notices
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <hr className="my-2 border-blue-gray-50" />
              <ListItem>
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Messages
                <ListItemSuffix>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Message from Chairman
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Message From Managing Director
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </Card>
        </Drawer>
      </div>
    </>
  );
};

export default Layer;
