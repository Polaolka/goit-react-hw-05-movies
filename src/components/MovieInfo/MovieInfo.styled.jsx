import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  margin: 20px auto 20px;
  display: inline-block;
  background-color: #e30136;
  color: white;
  font-size: 20px;
  padding: 8px 15px 8px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(237, 141, 141, 0.2),
    0px 4px 5px 0px rgba(237, 141, 141, 0.14),
    0px 1px 10px 0px rgba(237, 141, 141, 0.12);
  transition: background-color 300ms ease-out, box-shadow 300ms ease-out,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #b9062f;
    cursor: zoom-in;
    box-shadow: 0px 3px 5px -2px rgba(237, 141, 141, 0.4),
      0px 5px 6px 0px rgba(237, 141, 141, 0.34),
      0px 2px 12px 0px rgba(237, 141, 141, 0.32);
  }
`;
export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    color: rgb(196, 175, 175);
`
export const Line = styled.div`
width: 100%;
height: 1px;
background-color: rgb(196, 175, 175);;
`