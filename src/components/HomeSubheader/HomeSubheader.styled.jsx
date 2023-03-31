import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 30px;
  color: rgb(255, 237, 237);
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 20px 20px;
  align-items: baseline;
  border-bottom: 1px solid rgb(182, 151, 151);
  margin-bottom: 20px;
`;
export const Btn = styled.button`
  margin: 20px auto 0;
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
  transition: background-color 300ms ease-out, box-shadow 300ms ease-out;
  :hover {
    background-color: #b9062f;
}
`;
