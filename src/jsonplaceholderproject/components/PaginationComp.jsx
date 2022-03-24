import React, { useEffect, useState } from "react";
import { PaginationItem, PaginationLink, Pagination } from "reactstrap";

const PaginationComp = ({
  setPageNum,
  clickNext,
  clickPrev,
  nums,
  setNums,
}) => {
  const pagesLimit = 10;
  const [newNums, setnewNums] = useState([]);

  const handlePrev = () => {
    if (nums[0] === 1) return;
    nums.pop();
    nums.unshift(nums[0] - 1);
    setnewNums(nums);
    clickPrev();
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (nums[4] === 10) return;
    nums.shift();
    nums.push(nums[3] + 1);
    setnewNums(nums);
    clickNext();
  };

  const toFirst = () => {
    setNums([1, 2, 3, 4, 5]);
    setPageNum(1);
  };

  const toEnd = () => {
    let newNums = [];
    for (let i = pagesLimit - 4; i <= 10; i++) newNums.push(i);
    setNums(newNums);
    setPageNum(10);
  };

  useEffect(() => newNums.length > 0 && setNums(newNums), [newNums, setNums]);

  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink first onClick={() => toFirst()} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous onClick={() => handlePrev()} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => setPageNum(nums[0])}>
          {nums[0]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => setPageNum(nums[1])}>
          {nums[1]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => setPageNum(nums[2])}>
          {nums[2]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => setPageNum(nums[3])}>
          {nums[3]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => setPageNum(nums[4])}>
          {nums[4]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next onClick={(e) => handleNext(e)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => toEnd()} last />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComp;
