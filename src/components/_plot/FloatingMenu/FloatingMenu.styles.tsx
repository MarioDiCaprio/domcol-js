import {Paper, styled} from "@mui/material";


export const Context = styled(Paper)`
  padding: 15px;
  display: flex;
  gap: 10px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  button {
    font-size: 1.3rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;