import React, { useState, useEffect } from "react";
import Card from "./../../../components/Card/Card";
import Pagination from "../../../components/Pagination/Index";
import { CardWrapper } from "./styles";

const CardSection = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState();
  useEffect(() => {
    setCurrentPage(1);
    setPaginatedData(
      data?.slice(0, 6)
    );
  }, [data]);
  const onPageChange = (page) => {
    setCurrentPage(page);
    setPaginatedData(data?.slice((page - 1) * 6, (page - 1) * 6 + 6));
  };
  return (
    <>
      <CardWrapper>
        {paginatedData?.map((resource) => (
          <Card key={resource.id} resource={resource} />
        ))}
      </CardWrapper>
      <Pagination current={currentPage} lastPage={Math.ceil(data?.length / 6)} handleClick={onPageChange} />
    </>
  );
};

export default CardSection;
