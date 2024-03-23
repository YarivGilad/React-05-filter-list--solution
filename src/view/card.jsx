import styled from "styled-components";
import { Thumb } from "./thumb";

export function Card({ first_name, country, description, avatar }) {
  return (
    <Div>
      <Thumb image_url={avatar} container={Div} />
      <div id="texts-box">
        <h1>
          {first_name} from {country}
        </h1>
        <p>{description}</p>
      </div>
    </Div>
  );
}


// import ImageLoader from "./ImageLoader";


const Div = styled.div`
  padding: 2rem 2.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: paleturquoise;
  }

  &:active {
    background: skyblue;
    color: white;
    div#texts-box h1 {
      color: white;
    }
  }
  div#texts-box {
    padding-left: 2.8rem;

    h1{
      font-size: 3.8rem;
      font-weight: 400;
      font-family: "Yanone Kaffeesatz", sans-serif;
      color: slategray;
      transition: color 150ms;
    }
    p {
      font-family: "Raleway";
      font-size: 1.4rem;
      max-width: 35rem;
      transition: color 150ms;
    }
  }
`;
