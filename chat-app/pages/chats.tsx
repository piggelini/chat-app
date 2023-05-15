import Link from "next/link";
import { ref, onValue } from "firebase/database"
import { db } from "../firebase/database"

import { UserContext, User } from '@/context/user-context';
import { useContext, useState, useEffect, FC } from "react"

type Chat = {
    lastMessage: string,
    members: {},
    timestamp: number
}


const Chats: FC = () => {
    const { user } = useContext<User | null>(UserContext) ?? {};
    let [usersChats, setUsersChats] = useState<string[]>([])
    let [chatData, setChatData] = useState<Chat[]>([])
    console.log(user);


    useEffect(() => {
        const userRef = ref(db, 'users/' + user + "/chats")
        onValue(userRef, (snapshot) => {
            let chats: string[] = [];
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.key !== null) {
                    chats.push(childSnapshot.key)
                }

            })
            setUsersChats(chats);
        })
    }, [])


    useEffect(() => {
        console.log(usersChats)
        let data: Chat[] = [];
        usersChats.forEach((id) => {
            const chatRef = ref(db, 'chats/' + id)
            onValue(chatRef, (snapshot) => {
                data.push(snapshot.val());
                setChatData(data);
                console.log(data)
            })
        })

    }, [usersChats])







    return (
        <main className="bg-dark h-auto pb-6">
            <h2 className="m-2 mt-6">Conversations</h2>
            <ul>
                {chatData.map((chat, index) => {

                    return (
                        <Link href={`chat/${usersChats[index]}`} className="">
                            <li className="bg-brown mt-3 w-3/4 p-2 shadow-md rounded-r-lg flex">
                                <p className="font-bold p-2">{Object.keys(chat.members).map((member) => {
                                    if (member !== user) {
                                        console.log(member)
                                        return member
                                    }
                                })

                                }</p>
                                <p className="p-2">{chat.lastMessage}</p>

                            </li>
                        </Link>
                    )

                })}
            </ul>
        </main>
    )
}

export default Chats;