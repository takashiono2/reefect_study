import useModal from './hooks/useModal';

function App() {
  const { Modal } = useModal();
  return (
    <div style={{ margin: '2em;' }}>
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <Modal>
        <h2>Content from children</h2>
      </Modal>
    </div>
  );
}

export default App;
