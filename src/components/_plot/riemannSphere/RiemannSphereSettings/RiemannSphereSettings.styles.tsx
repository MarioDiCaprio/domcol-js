import {Divider, Paper, Slider, styled} from "@mui/material";


export const Context = styled(Paper)`
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 20px;
  width: 300px;
  border: 1px solid ${props => props.theme.palette.text.disabled};
`;

export const SectionDivider = styled(Divider)`
  padding: 0;
  margin: 20px 0 20px 0;
`;

export const SettingsSlider = styled(Slider)`
  color: ${props => props.color};
  height: 8px;
  & .MuiSlider-track {
    border: none;
  }
  & .MuiSlider-thumb {
    height: 24px;
    width: 24px;
    background-color: #fff;
    border: 2px solid currentColor;
    &:focus, &:hover, &.Mui-active, &.Mui-focusVisible {
      box-shadow: inherit;
    }
    &:before {
      display: none;
    };
  },
& .MuiSlider-valueLabel {
  line-height: 1.2;
  font-size: 12px;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 50% 50% 50% 0;
  background-color: ${props => (props.color === 'secondary')? props.theme.palette.secondary.main : props.theme.palette.primary.main};
  transform-origin: bottom left;
  transform: translate(50%, -100%) rotate(-45deg) scale(0);
  &:before {
    display: none
  }
  &.MuiSlider-valueLabelOpen {
    transform: translate(50%, -100%) rotate(-45deg) scale(1);
  }
  & > * {
    transform: rotate(45deg);
  }
},
`;