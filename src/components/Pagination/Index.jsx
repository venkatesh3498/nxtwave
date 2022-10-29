import LeftArrow from "../../assets/LeftArrow";
import RightArrow from "../../assets/RightArrow";
import { Wrapper, Item, Arrow } from "./styles";

const createList = (props) => {
  const range = 2;
  const arr = [];

  if (props.current > range + 1) {
    arr.push(
      <Item key={"1"} onClick={() => props.handleClick(1)}>
        1
      </Item>
    );
  }
  if (props.current > range + 2) {
    arr.push(<div>...</div>);
  }

  for (let i = props.current - range; i <= props.current + range; i++) {
    if (i < 1) continue;
    if (i > props.lastPage) continue;
    arr.push(
      <Item
        key={i}
        className={i === props.current && "current"}
        onClick={() => props.handleClick(i)}
      >
        {i}
      </Item>
    );
  }

  if (props.current + range + 1 < props.lastPage) {
    arr.push(<div>...</div>);
  }
  if (props.current + range < props.lastPage) {
    arr.push(
      <Item
        key={`${props.lastPage}`}
        onClick={() => props.handleClick(props.lastPage)}
      >
        {props.lastPage}
      </Item>
    );
  }

  return arr;
};

const Pagination = (props) => {
  return (
    <>
      <Wrapper>
        {props.current !== 1 && (
          <Item onClick={() => props.handleClick(props.current - 1)}>
            <LeftArrow />
          </Item>
        )}
        {createList(props)}
        {props.current !== props.lastPage && (
          <Item onClick={() => props.handleClick(props.current + 1)}>
            <RightArrow />
          </Item>
        )}
      </Wrapper>
    </>
  );
};

export default Pagination;
