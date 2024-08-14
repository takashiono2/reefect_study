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

//flex
//
// .flex {
//   「」
// }

//flex-col min-h-screen
//
// .flex-col {
//   「」
// }
//

// max-w-4xl
//
// .max-w-4xl {
//   「」: 56rem /* 896px */;
// }

// w-full
//
// .w-full {
//   「」
// }

// mx-auto

// .mx-auto {
//   「」
//   「」
// }

// my-8

// .my-8 {
//   「」: 2rem /* 32px */;
//   「」: 2rem /* 32px */;
// }
