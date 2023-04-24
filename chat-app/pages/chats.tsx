import Link from "next/link";



export default function Chats() {
    let chatArray = ["chat1", "chat2", "chat3"]

    return (
        <div><h2>Conversations</h2>
            {chatArray.map((chat) => {

                return (<Link href={`chat/${chat}`}>{chat}</Link>)

            })}
        </div>
    )
}