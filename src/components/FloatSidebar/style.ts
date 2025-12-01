import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FloatSidebarContainer = styled.div`
    background-color: ${(props) => props.theme.background.secondary};
    z-index: 100;
    opacity: 0.5;
    position: fixed;
    top: 20px;
    right: 20px;
    transition: 0.3s;
    border-radius: 5px;
    font-size: 30px;
    padding: 5px 0;
    &:hover {
        opacity: 1;
    }

    .optionsContainer {
        position: relative;
        color: ${(props) => props.theme.textColor.tertiary};
        .option {
            padding: 15px;
            cursor: pointer;
            transition: 0.3s;
			&.active {
				color: ${(props) => props.theme.textColor.primary};
                background-color: ${(props) => props.theme.background.primary};
			}
        }
        &:hover {
            & > .principal {
                color: ${(props) => props.theme.textColor.primary};
            }
            & > .optionContent {
                display: flex;
            }
        }
        .optionContent {
            animation: ${animation} 0.4s ease;
            display: none;
            background-color: ${(props) => props.theme.background.secondary};
            border: 1px solid ${(props) => props.theme.background.button};
            /* border-right: none; */
            position: absolute;
            top: 0;
            right: 100%;
            flex-direction: column;
            align-items: center;
            border-radius: 10px 0 0 10px;
            overflow: hidden;
            &.toUp {
                bottom: 0;
                top: initial;
            }
            .option:hover {
                background-color: ${(props) => props.theme.background.primary};
                /* color: ${(props) => props.theme.textColor.secondary}; */
            }
        }
    }
`;
