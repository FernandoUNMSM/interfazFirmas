import styled from "styled-components";

export const ToastContainerStyled = styled.div`
  .toastify {
    --toastify-color-progress-bgo: 0;
    --toastify-color-progress-bgo: .8;
    background-color: ${(props) => props.theme.background.secondary};
    color: ${(props) => props.theme.textColor.primary};
    font-size: 15px;
    z-index: 1000;
    svg {
      color: ${(props) => props.theme.textColor.primary};
    }
  }

`