import { Nav, Navbar, Sidemenu, Tech, Bottommenu } from "../components";
import { topManagement } from "../constants";
import { ServiceCost } from "../constants";
import React, { useState } from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import List from "react-virtualized/dist/commonjs/List";

const ProjectCard = ({ manImg, manName, manDesignation }) => {
  return (
    <div className="bg-gradient-to-b from-white to-[#00664218] hover:bg-gray-100 p-0 shadow-2xl rounded-2xl sm:w-[299px] w-full">
      <div className="relative w-full">
        <img
          src={manImg}
          alt="Top_Management_Image"
          className="w-full shadow-xl rounded-3xl object-cover opacity-95 p-2"
        />
      </div>
      <div className="py-7 flex flex-col text-center">
        <p className="text-gray-600 px-2 font-bold font-ubuntu text-[24px]">
          {manName}
        </p>
        <p className="text-[#808080] px-2 font-medium font-ubuntu text-[16px]">
          {manDesignation}
        </p>
      </div>
    </div>
  );
};

const ListHeader = () => (
  <div className="flex justify-between px-4 py-2 bg-gray-400 font-bold">
    <p>Service Name</p>
    <p>Service Cost</p>
  </div>
);

const About = () => {
  // Split the topManagement data into groups
  const topPosition = topManagement.slice(0, 3);
  const secondTopPosition = topManagement.slice(3, 6);
  const thirdTopPosition = topManagement.slice(6, 9);
  const fourthTopPosition = topManagement.slice(9, 13);

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
        className="flex justify-between px-4 py-2 hover:bg-gray-100"
      >
        <p className="text-gray-600">{service.serviceName}</p>
        <p className="font-medium text-gray-700">{service.price}.00</p>
      </li>
    );
  };

  return (
    <div className="bg-[#F5FFFA]">
      <Nav />
      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <div className="flex flex-col pt-[150px] mx-auto max-w-7xl">
        <h2 className="text-gray-900/50 pb-5 text-center text-[35px] font-bold font-ubuntu">
          Top Management
        </h2>
      </div>

      {/* Top section for chairman ma'am, Md sir and Sardin sir */}
      <div className="flex mx-auto pb-10 pt-2 max-w-7xl justify-center flex-wrap gap-7">
        {topPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Second section for general managers and advisors*/}
      <div className="flex mx-auto py-10  max-w-7xl justify-center flex-wrap gap-7">
        {secondTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Third section for AGMs */}
      <div className="flex mx-auto py-10 max-w-7xl justify-center flex-wrap gap-7">
        {thirdTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Fourth section for managers */}
      <div className="flex mx-auto py-10 max-w-7xl justify-center flex-wrap gap-7">
        {fourthTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* <div>
        <h1 className="bg-black text-white font-bold text-center text-[24px]">
          {" "}
          Test Price Searching{" "}
          <span className="text-red-500 font-bold text-[10px]">
            temporary
          </span>{" "}
        </h1>
        <div className="text-black">
          <select value={selectedBranch} onChange={handleBranchChange}>
            <option value="">Select Branch</option>
            {ServiceCost.map((branch) => (
              <option key={branch.braId} value={branch.braId}>
                {branch.braName}
              </option>
            ))}
          </select>
          <br />
          <input
            type="text"
            placeholder="Search Services"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredServices.length > 0 && (
            <div> */}
              {/* Render the header */}
              {/* <ListHeader /> */}

              {/* List */}
              {/* <AutoSizer>
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
        </div>
      </div> */}
 
      <Tech />
    </div>
  );
};

export default About;
