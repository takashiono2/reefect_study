import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="max-w-4xl w-full mx-auto my-8">{children}</main>
      <Footer />
    </div>
  );
}

//flex-col min-h-screen
//
// .flex-col {
//   flex-direction: column
// }
//
// .container {
//   display: flex;
//   flex-direction: 「」;//主軸の向きを定義。デフォルト値、水平方向
// }
// .container {
//   display: flex;
//   flex-direction: 「」;//水平方向に逆向き
// }
// .container {
//   display: flex;
//   flex-direction: column;;//縦向き
// }
// .container {
//   display: flex;
//   flex-direction: column-reverse;;//縦向きの逆方向
// }
