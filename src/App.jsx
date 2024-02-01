import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-5">
        <h2 className="text-xl font-semibold">Modalni ochish uchun "Modal" tugmasi ustiga bosing!</h2>
        <Modal open={open} onClose={() => setOpen(false)} />
        <button className="bg-blue-500 py-2 px-6 mt-3 rounded-md hover:opacity-75 text-white text-lg font-bold" onClick={() => setOpen(true)}>Modal</button>
      </div>
    </>
  );
}

export default App;