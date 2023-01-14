import { useState, createContext } from "react";

interface IModalContet {
  modal: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContet>({
  modal: false,
  open: () => {},
  close: () => {},
});

export function ModelState({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState(false);

  function open() {
    setModal(true);
  }
  function close() {
    setModal(false);
  }

  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
