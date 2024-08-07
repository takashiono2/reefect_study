import useModal from './hooks/useModal';

function App() {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <div style={{ margin: '2em' }}>
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <div>
        <button onClick={openModal}>Open</button>
      </div>
      <Modal>
        <div style={{
          backgroundColor: 'white',
          width: '300px',
          height: '200px',
          padding: '1em',
          borderRadius: '15px',
        }}>
          <h2>Content from children</h2>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
