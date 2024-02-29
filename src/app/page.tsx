import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-center content-center">
        <h1 className="bah-bah main-text">Добро пожаловать!</h1>
        <div className="w-4/5 m-auto"><p className="text-4xl">Это самый быстрый ридер книг, который вы когда либо видели!</p>
        <p  className="text-4xl">Нажмите на "Моя библиотека", чтобы перейти к списку доступных книг и начать читать</p></div>
      </div>
      <div className="h-32"></div>
    </main>
  );
}
