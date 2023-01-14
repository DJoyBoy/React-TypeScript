import { Loader } from "./components/Loader";
import { Product } from "./components/Product";
import { Error } from "./components/Error";
import { useProdukt } from "./hooks/produkt";
import { Modal } from "./components/Modyle";
import { CreateProdukt } from "./components/CreatrProdukt";
import { useContext, useState } from "react";
import { IProduct } from "./module";
import { ModalContext } from "./context/ModalContext";

function App() {
  const { loaing, error, products, addProukt } = useProdukt();
  const { modal, open, close } = useContext(ModalContext);

  function createHandel(product: IProduct) {
    close();
    addProukt(product);
  }

  return (
    <div className="container mx-auto max-w-2xt pt-5">
      {loaing && <Loader />}
      {error && <Error error={error} />}
      {products.map((p) => (
        <Product product={p} key={p.id} />
      ))}

      {modal && (
        <Modal title="Create new product" onCloce={close}>
          <CreateProdukt onCreate={createHandel} onClose={close} />
        </Modal>
      )}
      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
}

export default App;
