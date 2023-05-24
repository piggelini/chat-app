import Link from "next/link"
import { HiChevronLeft } from 'react-icons/hi';
import { AiOutlineSend } from "react-icons/ai"
import { ref, onValue, set, serverTimestamp, push, update } from "firebase/database"
import { db } from "@/firebase/database"
import { UserContext } from '@/context/user-context';
import { FC, useContext, useRef, useState, useEffect } from "react"
import { User } from "@/context/user-context"
import { GetServerSideProps } from 'next';


//This page component renders the specific chat you clicked on. 
type chatProps = {
    id?: string
}


type Message = {
    message: string,
    sender: string,
    timestamp: number
}


const Chat: FC = ({ id }: chatProps) => {

    const { user } = useContext<User | null>(UserContext) ?? {}
    const message = useRef<HTMLInputElement>(null)
    const chatBox = useRef<HTMLDivElement>(null)
    let [messages, setMessages] = useState<Message[]>([])


    useEffect(() => {
        scrollToBottom();
    }, [messages])

    //The component gets the chat-id from the router link, so it can get the messages from the chosen chat. 
    //The onValue 
    useEffect(() => {
        const reference = ref(db, 'messages/' + id)

        onValue(reference, (snapshot) => {
            const data: Message[] = []
            snapshot.forEach((childSnapshot) => {
                data.push(childSnapshot.val());

            })
            setMessages(data);
        })
    }, [id, user])


    //Make sure the scrollbar is at the bottom of the page when a new message comes up or when the user enters the chat
    const scrollToBottom = () => {
        if (chatBox.current) {
            chatBox.current.scrollTop = chatBox.current.scrollHeight - chatBox.current.clientHeight;
        }
    }


    // This function runs when a user sends a message
    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //It first checks if the user has written anything
        if (message.current?.value !== undefined && message.current.value !== "") {

            //It creates a reference ID in the database for the specific message object
            const newMessageRef = push(ref(db, 'messages/' + id));

            //It creates the message object and sets it in the database
            set(newMessageRef, {
                message: message.current.value,
                sender: user,
                timestamp: serverTimestamp(),
            });

            //The last message received or sent is updated in the chats node, the value is displayed on the Chats-page
            const lastMessageRef = ref(db, "chats/" + id)
            update(lastMessageRef, { lastMessage: message.current.value })
            message.current.value = "";
        }

    }

    return (
        <>
            <header className="sticky top-16 flex p-1 items-center justify-between bg-dark">
                <Link href="/chats"><div className='ml-1.5'><HiChevronLeft size="30" /></div></Link>
                <h2 className='text-sm mr-1.5'>{id}</h2>
            </header>
            <main className=" bg-dark">
                <div className="flex flex-col bg-dark pb-5 h-96
                    overflow-y-scroll scrollbar-thin scrollbar-thumb-purple
                    hover:scrollbar-thumb-beige scroll " ref={chatBox}>

                    {/* Here all the messages get maped out into the chatbox */}
                    {messages.map((mess) => {
                        return (

                            <div key={mess.timestamp} className={` text-s p-2 m-3 rounded w-2/4 shadow-lg 
                            ${user === mess.sender ? "self-end text-dark bg-green" : " bg-purple"}`}>
                                <p className="font-bold">{mess.sender} </p>
                                <p>{mess.message}</p>
                            </div>

                        )
                    })}
                </div>


                <form onSubmit={sendMessage} action="" className="bg-dark bottom-0 fixed h-24 w-screen p-2 ">
                    <div className="bg-dark flex justify-center" >
                        <input ref={message} className="bg-purple rounded-xl p-4 placeholder-light 
                            text-s shadow-lg" type="text" placeholder="Type your message..." />
                        <button className="ml-2 text-light rounded-full hover:text-green">
                            <AiOutlineSend size="32" />
                        </button>
                    </div>
                </form>
            </main>

        </>

    )
}

export default Chat;

//Gets the chat-id before the page is rendered
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return { props: { id: query.id } }
}