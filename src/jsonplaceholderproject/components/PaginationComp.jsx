import React, { useEffect, useState } from "react";
import { PaginationItem, PaginationLink, Pagination } from "reactstrap";

const PaginationComp = ({ setPageNum, clickNext, clickPrev }) => {
  const pagesLimit = 10;
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const [clicked, setClicked] = useState(false);
  const [newNums, setnewNums] = useState([]);

  const handlePrev = () => {
    if (nums[0] === 1) return;
    setnewNums(nums);
    newNums.pop();
    newNums.unshift(newNums[0] - 1);
    setClicked(!clicked);
    clickPrev();
  };

  const handleNext = () => {
    if (nums[4] === 10) return;
    setnewNums(nums);
    newNums.shift();
    newNums.push(newNums[3] + 1);
    setClicked(!clicked);
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

  useEffect(() => newNums.length && setNums(newNums), [clicked, newNums]);

  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink href="#" first onClick={() => toFirst()} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" previous onClick={() => handlePrev()} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => setPageNum(nums[0])}>
          {nums[0]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => setPageNum(nums[1])}>
          {nums[1]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => setPageNum(nums[2])}>
          {nums[2]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => setPageNum(nums[3])}>
          {nums[3]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => setPageNum(nums[4])}>
          {nums[4]}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" next onClick={() => handleNext()} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={() => toEnd()} last />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComp;
