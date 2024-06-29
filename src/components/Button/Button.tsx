import { ButtonStyled } from './styles';

interface Props {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string,
	children: React.ReactNode;
}

export const Button = ({ onClick, className = 'buttonWithAction', children }: Props) => {
	return <ButtonStyled onClick={onClick} className={className}>{children}</ButtonStyled>;
};
