
import Link from "next/link"


//{books.map(book => (  ...  ))}
export default function library() {
  

    return <div className="centered-div">
        <div className="library-div carousel carousel-vertical p-5 space-y-4 rounded-box">
            
        <Link href="/viewer/1">
                <div className="carousel-item bg-green-500 w-100 h-80 rounded-box centered-text text-5xl font-bold">
                    <div className="flex flex-col">
                        <div>Собачье сердце</div>
                        <div className="navbar text-2xl">
                            <div className="navbar-start">
                                Автор: Михаил Булгаков
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            
            <Link href="/viewer/2">
                <div className="carousel-item bg-green-500 w-100 h-80 rounded-box centered-text text-5xl font-bold">
                    <div className="flex flex-col">
                        <div>Джерри островитянин</div>
                        <div className="navbar text-2xl">
                            <div className="navbar-start">
                                Автор: Джек Лондон
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/viewer/3">
                <div className="carousel-item bg-green-500 w-100 h-80 rounded-box centered-text text-5xl font-bold">
                    <div className="flex flex-col">
                        <div>Долгая прогулка</div>
                        <div className="navbar text-2xl">
                            <div className="navbar-start">
                                Автор: Стивен Кинг
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    </div>
}