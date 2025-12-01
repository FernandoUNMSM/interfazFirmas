import { useDraggable } from "@dnd-kit/core";
import { DraggableContainer, DraggableItem, DraggableItemControl } from "./styles";
import { IFirma } from "../../store/firmaConfStore";
import { AiOutlineDelete } from "react-icons/ai";
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";
import { useBoundStore } from "../../store/boundStore";
import { useEffect, useRef, useState } from "react";
import { Transform } from "@dnd-kit/utilities";

type PropsItemControl = {
    conf: IFirma;
    transform: Transform | null;
};

const DraggableItemControlComponent = ({ conf, transform }: PropsItemControl) => {
    const { removeFirmaConf, updateBlocked } = useBoundStore();

    const controlRef = useRef<HTMLDivElement>(null);
    const [openUpwards, setOpenUpwards] = useState(false);

    const lastCheckRef = useRef<number>(0);

    function findAncestor(el: HTMLElement | null, selector: string): HTMLElement | null {
        if (!el) return null;
        let current: HTMLElement | null = el;
        while (current.parentElement) {
            if (current.parentElement.matches(selector)) {
                return current.parentElement;
            }
            current = current.parentElement;
        }
        return null;
    }

    useEffect(() => {
        const checkPosition = () => {
            const now = Date.now();
            if (now - lastCheckRef.current < 500) return;
            lastCheckRef.current = now;

            if (!controlRef.current) return;

            // Buscar el ancestor específico
            const ancestor = findAncestor(controlRef.current, ".preview-container");
            if (!ancestor) return;

            const controlRect = controlRef.current.getBoundingClientRect();
            const ancestorRect = ancestor.getBoundingClientRect();

            const spaceBelow = ancestorRect.bottom - controlRect.top;
            const spaceAbove = controlRect.top - ancestorRect.top;

            if (spaceBelow < controlRect.height + 20 && spaceAbove > spaceBelow) {
                setOpenUpwards(true);
            } else {
                setOpenUpwards(false);
            }
        };

        checkPosition();

        const ancestor = findAncestor(controlRef.current, ".preview-container");
        ancestor?.addEventListener("scroll", checkPosition);
        window.addEventListener("resize", checkPosition);

        return () => {
            ancestor?.removeEventListener("scroll", checkPosition);
            window.removeEventListener("resize", checkPosition);
        };
    }, [transform]);

    return (
        <DraggableItemControl ref={controlRef} conf={conf} className={openUpwards ? "open-upwards" : ""}>
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
                <DraggableItem ref={setNodeRef} conf={{ ...conf, blocked: false }} style={transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : {}}>
                    <DraggableItemControlComponent conf={conf} transform={transform} />
                </DraggableItem>
            ) : (
                <DraggableItem ref={setNodeRef} conf={conf} style={transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : {}} {...attributes} {...listeners}>
                    <DraggableItemControlComponent conf={conf} transform={transform} />
                </DraggableItem>
            )}
        </DraggableContainer>
    );
}
