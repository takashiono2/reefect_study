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
