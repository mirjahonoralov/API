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
    if (nums[0].num === 1) return;
    nums.pop();
    nums.unshift({ num: nums[0].num - 1 });
    setnewNums(nums);
    clickPrev();
  };

  const handleNext = () => {
    if (nums[4].num === 10) return;
    nums.shift();
    nums.push({ num: nums[3].num + 1 });
    setnewNums(nums);
    clickNext();
  };

  const toFirst = () => {
    setNums([{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }]);
    setPageNum(1);
  };

  const toEnd = () => {
    let newNums = [];
    for (let i = pagesLimit - 4; i <= 10; i++) newNums.push({ num: i });
    setNums(newNums);
    setPageNum(10);
  };

  const handleClickNum = (num) => {
    setPageNum(num.num);
    let index = nums.indexOf(num);
    nums = nums.map((num) => ({ ...num, clicked: false }));
    nums.splice(index, 1, { num: num.num, clicked: true });
    setNums([...nums]);
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
      {nums.map((num, id) => {
        return (
          <PaginationItem key={id} active={num.clicked ? true : false}>
            <PaginationLink onClick={() => handleClickNum(num)}>
              {num.num}
            </PaginationLink>
          </PaginationItem>
        );
      })}
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
