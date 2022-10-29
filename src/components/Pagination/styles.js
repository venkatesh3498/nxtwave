import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;
const Item = styled.div`
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.6;
  }
  &.current {
    background-color: blue;
    pointer-events: none;
    color: white;
  }
`;

const Arrow = styled.div`
  padding: 0.5em;
  cursor: pointer;
`;
export {
  Wrapper,
  Item,
  Arrow
}