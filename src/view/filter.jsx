import { useRef } from "react";
import styled from 'styled-components';


export function Filter({ listData, onFilter }) {
  const num = useRef(-1);
  const input = useRef(null);

  const updateList = () => {
    num.current = 0;
    const txt = input.current.value;

    const filteredList = listData.map((item) => {
      const show = item.first_name.toLowerCase().includes(txt.toLowerCase());
      if (show) num.current++;
      return { ...item, show };
    });
    onFilter(filteredList);
  };

  return (
    <Div>
      <h4>
        {num.current !== -1 ? num.current : listData.length} items filtered
      </h4>
      <input ref={input} onChange={updateList} />
    </Div>
  );
}



const Div = styled.div`
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h4{
    font-family: "Expletus Sans";
    text-align: left;
    font-size: 2rem;
    font-weight: 400;
    color: darkred;
  }

  input{
    height: 3.5rem;
    width: 24rem;
    outline: none;
    border-radius: 0.5rem;
    border: white 2px solid;
    transition: border 0.5s;
    padding: 1rem;

    &:focus {
      border: tomato 2px solid;
    }
  }

`;
