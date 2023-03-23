import {Paper, styled} from "@mui/material";


export const Content = styled(Paper)`
  width: fit-content;
  min-width: 50vw;
  max-width: 70vw;
  height: 100%;
`;

export const TopSection = styled('div')`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: flex-end;
`;

export const LinksSection = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  margin-top: 30px;
`;