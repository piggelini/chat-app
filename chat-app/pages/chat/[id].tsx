import { useRouter } from 'next/router';
import Link from "next/link"

export default function Chat() {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <header>
                <Link href="/chats">back</Link>
            </header>
            <div>Hello {id}!</div>
        </>

    )
}