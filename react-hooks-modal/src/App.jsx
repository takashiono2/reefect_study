import useModal from './hooks/useModal';

function App() {
  const { Modal ,openModal, closeModal } = useModal();

  return (
    <div style={{ margin: '2em' }}>
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <div>
        <button onClick={openModal}>Open</button>
      </div>
      <Modal>
        <h2>Content from children</h2>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default App;
