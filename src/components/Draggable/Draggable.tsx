import { useDraggable } from '@dnd-kit/core';
import { DraggableContainer, DraggableItem, DraggableItemControl } from './styles';
import { IFirma } from '../../store/firmaConfStore';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
import { useBoundStore } from '../../store/boundStore';

const DraggableItemControlComponent = ({ conf }: { conf: IFirma }) => {
	const { removeFirmaConf, updateBlocked } = useBoundStore();
	return (
		<DraggableItemControl conf={conf}>
			<div className="numberOfSign">{conf.id}</div>
			<div className="actionIcons">
				<div className="icon" onPointerDown={() => removeFirmaConf(conf.id)}>
					<AiOutlineDelete />
				</div>
				<div className="icon lock" onPointerDown={() => updateBlocked(!conf.blocked, conf.id)}>
					{conf.blocked ? <IoLockOpenOutline /> : <IoLockClosedOutline />}
				</div>
			</div>
		</DraggableItemControl>
	);
};

type Props = {
	id: number;
	conf: IFirma;
};

export function Draggable({ id, conf }: Props) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
	});

	return (
		<DraggableContainer conf={conf}>
			{conf.blocked ? (
				<DraggableItem
					ref={setNodeRef}
					conf={{ ...conf, blocked: false }}
					style={transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : {}}
				>
					<DraggableItemControlComponent conf={conf} />
				</DraggableItem>
			) : (
				<DraggableItem
					ref={setNodeRef}
					conf={conf}
					style={transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : {}}
					{...attributes}
					{...listeners}
				>
					<DraggableItemControlComponent conf={conf} />
				</DraggableItem>
			)}
		</DraggableContainer>
	);
}
