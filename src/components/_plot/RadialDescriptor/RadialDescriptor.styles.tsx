import {Paper, styled} from "@mui/material";


export const Context = styled(Paper)`
  position: fixed;
  right: 20px;
  top: 100px;
  height: 50vh;
  width: 75px;
  padding: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Gradient = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(#ee52a0, #cebb54, #26bf6f, #43539a, #ee52a0);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;