import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
text-decoration: none;
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
    color: rgb(215, 190, 190);
    margin: 20px auto 20px;
    line-height: 1.5;
    font-size: 18px;
`
export const Line = styled.div`
width: 100%;
height: 1px;
background-color: rgb(210, 190, 190);
`

export const Img = styled.img`
  object-fit: cover;
`

export const BoldText = styled.span`
  /* display: block; */
 font-weight: bold;
 margin: 5px 10px 0 10px ;
`
export const Ul = styled.ul`
 display: flex;
    gap: 20px;
    color: rgb(210, 190, 190);
 
 margin: 10px;
`
export const LinkAddInfo = styled(Link)`
  margin: 20px auto 20px;
  display: inline-block;
  border: 1px solid #e30136;
  color: rgb(210, 190, 190);
  font-size: 18px;
  padding: 8px 15px 8px;
text-decoration:none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(237, 141, 141, 0.2),
    0px 4px 5px 0px rgba(237, 141, 141, 0.14),
    0px 1px 10px 0px rgba(237, 141, 141, 0.12);
  transition: color 300ms ease-out, box-shadow 300ms ease-out,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: #b9062f;
    cursor: zoom-in;
    box-shadow: 0px 3px 5px -2px rgba(237, 141, 141, 0.4),
      0px 5px 6px 0px rgba(237, 141, 141, 0.34),
      0px 2px 12px 0px rgba(237, 141, 141, 0.32);}
`
export const Text = styled.span`
  display: inline-block;
 margin: 5px 10px 0 10px ;
`