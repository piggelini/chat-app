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

    useEffect(() => {
        const userRef = ref(db, 'users/' + user + "/chats")
        //Get all the chats from the logged in and updates if there is a new chat added
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

    //iterates the userChats id:s to get all of the specific chatdetails from each chat.
    useEffect(() => {
        console.log(usersChats);
        let data: Chat[] = [];
        usersChats.forEach((id) => {
            const chatRef = ref(db, 'chats/' + id)
            onValue(chatRef, (snapshot) => {
                data.push(snapshot.val());
                setChatData(data);
            })
        })
    }, [usersChats])

    //returns all of the users chats with the info from chatData
    return (
        <main className="bg-dark h-full pb-6">
            <h2 className="m-2 mt-6">Conversations</h2>
            <ul>

                {chatData.map((chat, index) => {
                    console.log(chat);
                    return (
                        <Link key={usersChats[index]} href={`chat/${usersChats[index]}`} className="">
                            <li className="bg-purple mt-3 w-3/4 p-2 shadow-md rounded-r-lg flex">
                                <p className="font-bold p-2">{Object.keys(chat.members).map((member) => {
                                    if (member !== user) {

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