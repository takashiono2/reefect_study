import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/" className="font-bold text-lg">
          LOGO
        </Link>
        <div className="text-sm">Link</div>
      </div>
    </header>
  );
};

export default Header;

// #container {
//   display: flex;
//   justify-content: 「」;　//左よせ
// }
// #container {
//   display: flex;
//   justify-content: 「」; //中央よせ
// }
// #container {
//   display: flex;
//   justify-content: 「」;　//均等に配置し、最初のアイテムは先頭に、最後のアイテムは末尾に
// #container {
//   display: flex;
//   justify-content: 「」; 　//先頭と末尾の間隔は、各アイテムの間隔の半分の大きさ
// }
// #container {
//   display: flex;
//   justify-content: 「」; 　// 先頭と末尾と各アイテムの周りには、同じ大きさの間隔を置く
// }

