import { styles } from "../styles";
import { ServiceCost } from "../constants";
import React, { useState, useEffect } from "react";
import video from "../assets/video.mp4";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import List from "react-virtualized/dist/commonjs/List";

const ListHeader = () => (
  <div className="flex justify-between  px-8 py-2 bg-gray-400 font-bold">
    <p>Service Name</p>
    <p>Service Cost</p>
  </div>
);
const Hero = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    setFilteredServices([]); // Reset filtered services on branch change
    setSearchTerm(""); // Reset search term on branch change
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    const branchServices = ServiceCost.find(
      (branch) => branch.braId === parseInt(selectedBranch)
    )?.services;
    if (branchServices) {
      const filtered = branchServices.flatMap((category) =>
        category.items.filter((service) =>
          service.serviceName.toLowerCase().includes(searchTerm)
        )
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices([]);
    }
  };
  const renderRow = ({ index, style }) => {
    const service = filteredServices[index];

    return (
      <li
        key={service.serviceId}
        style={style}
        className="flex justify-between px-4 py-2 bg-gray-300 hover:bg-gray-100"
      >
        <p className="text-gray-600 font-ubuntu">{service.serviceName}</p>
        <p className="font-medium text-gray-700 font-ubuntu">
          {service.price.toLocaleString("en-BD", {
            style: "currency",
            currency: "BDT",
          })}{" "}
        </p>
      </li>
    );
  };
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const handleSearchClick1 = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <>
      <section className="w-full h-[700px] relative justify-top items-bottom">
        <video
          className=" w-full h-[700px] object-cover object-top top-0 left-0"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="absolute w-full h-[700px] top-0 left-0 bg-gray-900/50"></div>
        <div
          className={`${styles.paddingX} absolute top-[80px] max-w-7xl mx-auto inset-1 justify-center items-bottom text-center flex flex-col text-white`}
        >
          <div className="flex-col max-w-7xl hidden shadow-2xl md:block sm:w-5/6 mx-auto">
            <div className="max-w-7xl rounded-[5px] shadow-2xl bg-[#F5FFFA] ">
              <ul
                className="flex mb-0 ml-2 mr-2 list-none flex-wrap pt-1 pb-2 flex-row"
                role="tablist"
              >
                <li className=" mr-2 mb-1 last:mr-0 fixed-left flex-auto text-center">
                  <a
                    className={
                      "text-[16px] font-ubuntu font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 3
                        ? "text-slate-900 bg-" + color + "-600"
                        : "text-" + color + "-600 bg-[#417D41] ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Find Doctor
                  </a>
                </li>
                <li className=" mr-2 last:mr-0 fixed-center flex-auto text-center">
                  <a
                    className={
                      "text-[16px] font-ubuntu  font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-slate-900 bg-" + color + "-600"
                        : "text-" + color + "-600 bg-[#417D41]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <p className="text-shadow ">Appointment</p>
                  </a>
                </li>
                <li className=" mr-2 last:mr-0 fixed-right flex-auto text-center">
                  <a
                    className={
                      "text-[16px] font-ubuntu font-bold px-2 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-slate-900 bg-" + color + "-600"
                        : "text-" + color + "-600 bg-[#417D41]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Test Price
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 w-full mb-1 shadow-lg rounded">
                <div className="px-2 py-2 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link1"
                    >
                      <form className="max-w-screen-xl mx-auto">
                        <div className="grid md:grid-cols-9 md:gap-1">
                          <div className="relative z-0 col-span-3 w-full mb-1 group">
                            <select
                              id="countries"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border border-gray-500 border-1 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                            >
                              <option selected>Choose a Branch</option>
                              <option value="US">Dhanmondi</option>
                              <option value="CA">Shymoli</option>
                              <option value="FR">Shantinagar</option>
                              <option value="DE">Uttara</option>
                            </select>
                          </div>
                          <div className="relative z-0 w-full col-span-3 mb-1 group">
                            <select
                              id="countries"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border b border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                            >
                              <option selected>Choose a Specilization</option>
                              <option value="US">Chest Medicine</option>
                              <option value="CA">Neuro Medicine</option>
                              <option value="FR">Sonologist</option>
                              <option value="DE">Cardiology</option>
                            </select>
                          </div>
                          <div className="relative col-span-3 mb-1 group">
                            <select
                              id="countries"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border b border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                            >
                              <option selected>Choose a Day</option>
                              <option value="US">Saterday</option>
                              <option value="CA">Sunday</option>
                              <option value="FR">Monday</option>
                              <option value="DE">Tuesday</option>
                            </select>
                          </div>
                          <div className="relative col-span-9 mb-1 group ">
                            <input
                              type="text"
                              name="floating_first_name"
                              placeholder="Doctors Name"
                              id="floating_first_name"
                              className="block pl-2 py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-gray-500 border-1 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                              required
                            />
                          </div>
                          {/*} <div className="relative z-0 w-full mb-1 group">
<select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
<option selected>Choose a Day</option>
<option value="US">Sunday</option>
<option value="CA">Monday</option>
<option value="FR">Tuesday</option>
<option value="DE">Wednesday</option>
</select></div> */}
                        </div>
                      </form>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <form className="max-w-screen-xl mx-auto">
                        <div className="grid md:grid-cols-9 md:gap-1">
                          <div className="relative z-0 col-span-9 w-full mb-1 group">
                            <button
                              type="button"
                              className="text-gray-600 w-full rounded block col-span-9 mb-2 h-[43px] hover:text-gray-900 border bg-[#F0FFF0] shadow-2xl  border-none focus:ring-4 focus:outline-none focus:ring-[#417D41] font-ubuntu text-[16px] font-bold px-5 py-2.5 text-center  dark:border-[#417D41] dark:text-white dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-[#417D41] "
                            >
                              Make An Appointment{" "}
                              <span className="animate-ping">Now</span>
                            </button>
                            <div className="flex flex-row w-full col-span-9">
                              <div className="flex w-full col-span-4 items-center">
                                {!isSearchVisible && (
                                  <button
                                    className=" px-4 py-2 bg-[#F0FFF0] shadow-2xl mb-1 w-full mr-2 font-ubuntu font-medium col-span-4 text-gray-900 rounded"
                                    onClick={handleSearchClick}
                                  >
                                    <p class>
                                      Chat With{" "}
                                      <span class=" drop-shadow-[0_1.0px_1.0px_rgba(0,0,0,0.5)] text-white gradient-alt-flow">
                                        AI Consultant
                                      </span>
                                    </p>
                                  </button>
                                )}
                                {!isSearchVisible && (
                                  <button
                                    className="px-4 py-2 bg-[#F0FFF0] shadow-2xl  mb-1 w-full font-ubuntu font-medium col-span-4 text-gray-900 rounded"
                                    onClick={handleSearchClick1}
                                  >
                                    Chat With Human Consultant
                                  </button>
                                )}
                                {isSearchVisible && (
                                  <form class=" w-full col-span-9 mb-1">
                                    <label
                                      for="default-search"
                                      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                                    >
                                      Search
                                    </label>
                                    <div class="relative">
                                      <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none"></div>
                                      <input
                                        type="search"
                                        id="default-search"
                                        class="block w-full p-2 col-span-9 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Chat With PDCL AI Consultant"
                                        required
                                      />
                                    </div>
                                  </form>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link3"
                    >
                      <form className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-9 md:gap-1">
                          <div className="relative z-0 w-full col-span-9 mb-1 group">
                            <select
                              value={selectedBranch}
                              onChange={handleBranchChange}
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                            >
                              <option value="">Select Branch</option>
                              {ServiceCost.map((branch) => (
                                <option key={branch.braId} value={branch.braId}>
                                  {branch.braName}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="relative col-span-9 mb-1 group ">
                            <input
                              type="text"
                              value={searchTerm}
                              onChange={handleSearchChange}
                              name="floating_first_name"
                              placeholder="Test Name"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                            <section className="">
                              <ul className="">
                                {filteredServices.length > 0 && (
                                  <div>
                                    {/* Render the header */}
                                    <ListHeader />

                                    {/* List */}
                                    <AutoSizer>
                                      {({ width }) => (
                                        <List
                                          height={250}
                                          rowCount={filteredServices.length}
                                          rowHeight={50}
                                          rowRenderer={renderRow}
                                          overscanRowCount={5}
                                          width={width}
                                        />
                                      )}
                                    </AutoSizer>
                                  </div>
                                )}
                              </ul>
                            </section>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-2 rounded sm:hidden flex-1 justify-top items-center mt-[25px] mx-auto">
            <div className=" w-[115%] h-auto bg-[#F5FFFA] p-2 rounded block">
              <ul
                className="flex mb-0 ml-2 mr-2 list-none flex-wrap pt-1 pb-1 flex-col shadow-lg"
                role="tablist"
              >
                <li className="pb-1 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-[16px] font-bold font-ubuntu px-2 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-slate-900 bg-" + color + "-600"
                        : "text-" + color + "-600 bg-PDCL-green ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Find Doctor
                  </a>
                </li>
                <li className="pb-1 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-[16px] font-bold font-ubuntu px-2 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-slate-900 bg-" + color + "-600"
                        : "text-" + color + "-600 bg-PDCL-green")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Appointment
                  </a>
                </li>
                <li className=" last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-[16px] font-bold font-ubuntu px-2 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 3
                        ? "text-slate-900 bg-" + color + "-600"
                        : "text-" + color + "-600 bg-PDCL-green")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Test Price
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 w-full mb-1 shadow-lg rounded">
                <div className="px-2 py-2 flex-auto ">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link1"
                    >
                      <form className="max-w-screen-xl bg-white mx-auto">
                        <div className="grid md:grid-cols-4 md:gap-1">
                          <div className="relative z-0 w-full mb-1 group">
                            <select
                              id="countries"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                            >
                              <option selected>Choose a Branch</option>
                              <option value="US">Dhanmondi</option>
                              <option value="CA">Shymoli</option>
                              <option value="FR">Shantinagar</option>
                              <option value="DE">Uttara</option>
                            </select>
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <select
                              id="countries"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                            >
                              <option selected>Choose a Specilization</option>
                              <option value="US">Chest Medicine</option>
                              <option value="CA">Neuro Medicine</option>
                              <option value="FR">Sonologist</option>
                              <option value="DE">Cardiology</option>
                            </select>
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <select
                              id="countries"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                            >
                              <option selected>Choose a Day</option>
                              <option value="US">Saterday</option>
                              <option value="CA">Sunday</option>
                              <option value="FR">Monday</option>
                              <option value="DE">Tuesday</option>
                            </select>
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="text"
                              name="floating_first_name"
                              placeholder="Doctors Name"
                              id="floating_first_name"
                              className="block pl-2 py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                              required
                            />
                          </div>
                          {/* <div className="relative z-0 w-full mb-1 group">
<select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-[#00a884] border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
<option selected>Choose a Day</option>
<option value="US">Sunday</option>
<option value="CA">Monday</option>
<option value="FR">Tuesday</option>
<option value="DE">Wednesday</option>
</select></div> */}
                        </div>
                      </form>
                    </div>
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link2"
                    >
                      <form className="max-w-screen-xl mx-auto">
                        <div className="grid md:grid-cols-5 md:gap-1">
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="text"
                              name="floating_first_name"
                              placeholder="Patient Name"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="text"
                              name="floating_first_name"
                              placeholder="Phone Number"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="text"
                              name="floating_first_name"
                              placeholder="Doctor Name"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="text"
                              name="floating_first_name"
                              placeholder="Doctor's Specilitiy"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="text"
                              name="floating_first_name"
                              placeholder="Branch Name"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="date"
                              name="floating_first_name"
                              placeholder="Date"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="text"
                              name="floating_first_name"
                              placeholder="Age"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                          </div>
                          {/* <div className="relative z-0 w-full mb-1 group">
<select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-gray-500 border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
<option selected>Choose your Gender</option>
<option value="US">Male</option>
<option value="CA">Female</option>
<option value="FR">Other</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
<select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-gray-500 border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
<option selected>Choose your Status</option>
<option value="US">Registered</option>
<option value="CA">Unregistered</option>
</select></div> */}
                          <button
                            type="button"
                            className="text-white rounded block h-[43px] hover:text-slate-900 border bg-PDCL-green hover:bg-white focus:ring-4 focus:outline-none focus:ring-[#125133] font-ubuntu text-[16px] font-bold px-5 py-2.5 text-center dark:border-gray-500 dark:text-[#125133] dark:hover:text-gray-600 dark:hover:bg-white dark:focus:ring-[#125133]"
                          >
                            Appoinment
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <form className="max-w-screen-xl mx-auto">
                        <div className="grid md:grid-cols-4 md:gap-12">
                          <div className="relative z-0 w-full mb-1 group">
                            <select
                              value={selectedBranch}
                              onChange={handleBranchChange}
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border border-1 border-gray-500 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"
                            >
                              <option value="">Select Branch</option>
                              {ServiceCost.map((branch) => (
                                <option key={branch.braId} value={branch.braId}>
                                  {branch.braName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="relative z-0 w-full mb-1 group">
                            <input
                              type="text"
                              value={searchTerm}
                              onChange={handleSearchChange}
                              name="floating_first_name"
                              placeholder="Test Name"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-gray-500 border-1 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"
                              required
                            />
                            <ul className="top-[100px]">
                              {filteredServices.length > 0 && (
                                <div>
                                  {/* Render the header */}
                                  <ListHeader />

                                  {/* List */}
                                  <AutoSizer>
                                    {({ width }) => (
                                      <List
                                        height={250}
                                        rowCount={filteredServices.length}
                                        rowHeight={50}
                                        rowRenderer={renderRow}
                                        overscanRowCount={5}
                                        width={width}
                                      />
                                    )}
                                  </AutoSizer>
                                </div>
                              )}
                            </ul>
                          </div>
                          {/* <div className="relative z-0 w-full mb-1 group">
<select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600-500 bg-transparent border border-[#00a884] border-1 border-[#00a884] dark:text-gray-600 dark:border-[#00a884] dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
<option selected>Choose a branch</option>
<option value="US">United States</option>
<option value="CA">Canada</option>
<option value="FR">France</option>
<option value="DE">Germany</option>
</select></div>
*/}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
