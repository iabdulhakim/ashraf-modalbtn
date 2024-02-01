import { useEffect } from "react";
import { useRef } from "react";

const Modal = ({open, onClose}) => {
    const dialogRef = useRef();

    useEffect(() => {
        if (open) {
            dialogRef.current.showModal(); 
        } else {
            dialogRef.current.close();
        }
    }, [open]); 


    useEffect(() => {
        const handleEscape = e => {
            if (e.key == "Escape") {
                onClose();
            }
        };
        document.body.addEventListener("keyup", handleEscape);

        return () => {
            document.body.removeEventListener("keyup", handleEscape);
        };
    }, []);

    return <dialog className="rounded-xl p-2" ref={dialogRef}>
        <div className="p-5 border-2 border-neutral-300 rounded-lg">
            <h2 className="text-3xl font-bold">Assalomu Aleykum!</h2>
            <p className="text-md mt-10 ml-20">Modaldan chiqish uchun klaviaturadagi "Esc" tugmasini bosing!</p>
        </div>
    </dialog>
};

export default Modal;