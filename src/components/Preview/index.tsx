import { DndContext, DragEndEvent, rectIntersection } from '@dnd-kit/core';
import { Droppable } from '../Droppable/Droppable';
import { Draggable } from '../Draggable/Draggable';
import { IFirma } from '../../store/firmaConfStore';
import { OverflowContainer, PreviewContainer, ScaleContainer } from './styles';
import { useBoundStore } from '../../store/boundStore';
import { showToast } from '../../utilities/toatify';
import { FloatSidebar } from '../FloatSidebar/FloatSidebar';

export function Preview() {
	const { widthLienzo, heightLienzo, zoomLienzo, firmaConf, updatePosition } = useBoundStore();

	function handleDragEnd(ev: DragEndEvent) {
		const note: IFirma | undefined = firmaConf.find((x: IFirma) => x.id === ev.active.id);

		if (!note) return;

		const limiteHorizontal = widthLienzo - note.width;
		const limiteVertical = heightLienzo - note.height;

		note.position.x += Math.ceil(ev.delta.x);
		note.position.y += Math.ceil(ev.delta.y);

		if (note.position.x < 0 || note.position.y < 0 || note.position.x > limiteHorizontal || note.position.y > limiteVertical)
			showToast('La firma no puede salir de la hoja');

		if (note.position.x < 0) note.position.x = 0;
		if (note.position.y < 0) note.position.y = 0;

		if (note.position.x > limiteHorizontal) note.position.x = limiteHorizontal;
		if (note.position.y > limiteVertical) note.position.y = limiteVertical;

		updatePosition(note.position.x, note.position.y, note.id);
	}

	return (
		<OverflowContainer>
			<FloatSidebar />
			<ScaleContainer zoom={zoomLienzo}>
				<PreviewContainer>
					<DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
						<Droppable>
							{firmaConf.map((conf) => (
								<Draggable conf={conf} key={conf.id} id={conf.id} />
							))}
						</Droppable>
					</DndContext>
				</PreviewContainer>
			</ScaleContainer>
		</OverflowContainer>
	);
}
