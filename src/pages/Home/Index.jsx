import React, { useState } from "react";
import Tab from "../../components/Tabs/Index";
import SearchIcon from "../../assets/SearchIcon";
import { Box, SearchBar, SearchInput } from "./styles";
import { useSelector } from "react-redux";
import CardSection from "./components/CardSection";

const Home = () => {
  const data = useSelector((state) => state.resources.data);
  const [ResourcesData, setResourcesData] = useState(data);
  const onTabSelected = (index) => {
    setResourcesData(
      !index
        ? data
        : data.filter(
            (singleRec) => singleRec.tag === (index === 1 ? "request" : "user")
          )
    );
  };

  return (
    <>
      <Tab tabsList={tabsList} onTabSelected={onTabSelected} />
      <Box>
        <SearchBar>
          <SearchIcon />
          <SearchInput placeholder="Search" />
        </SearchBar>
        <CardSection data={ResourcesData} />
      </Box>
    </>
  );
};

export default Home;
const tabsList = [
  {
    name: "Resources",
    index: 0,
    first: true,
  },
  {
    name: "Requests",
    index: 1,
    center: true,
  },
  {
    name: "Users",
    index: 2,
    last: true,
  },
];
