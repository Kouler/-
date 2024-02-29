import { } from "next/navigation"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

let book_id = parseInt('2');

export default async function Viewer() {

    

    return <div>
        <div>Здесь будет плеер книги</div>

    </div>
}