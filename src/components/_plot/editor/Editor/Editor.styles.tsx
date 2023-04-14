import {Paper, styled} from "@mui/material";


export const EditorHead = styled(Paper)`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const EditorContent = styled('div')`
  width: 100%;
  min-width: 30vw;
  max-width: 100vw;
  height: 100%;
  background: ${props => props.theme.palette.background.default};
  overflow-y: scroll;
  overflow-x: hidden;
  user-select: none;
`;