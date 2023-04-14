import {Paper, styled} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DomainColoringWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: grab;
  z-index: -100;
`;

export const AlgorithmSelectionWrapper = styled(Paper)`
  position: fixed;
  top: 100px;
  left: 20px;
`;