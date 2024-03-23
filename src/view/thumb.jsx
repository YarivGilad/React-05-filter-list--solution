import styled from 'styled-components';

export function Thumb({ image_url, container }) {
  return (
    <Div container={container}>
      <img src={image_url} alt="profile visual" />
    </Div>
  );
}
const Div = styled.div`
  img {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background-color: darksalmon;
    transition: box-shadow 150ms, margin 150ms, padding 150ms;

    ${({ container }) => `
        ${container}:hover & {
          box-shadow: 0 0.4rem 1.5rem DimGrey;
          margin-bottom: 3rem;
          padding-bottom: 1rem;
        }
    `}
  }
`;
