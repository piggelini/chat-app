import { Inter } from 'next/font/google'
import { useRef, useContext, FC } from "react"
import { db } from "../firebase/database"
import { ref, get, child } from "firebase/database"
import Head from "next/head";
import { useRouter } from "next/router"
const inter = Inter({ subsets: ['latin'] })
import { UserContext, User } from '@/context/user-context';

//The homepage renders a loginpage for the user. Login using the id anna1,petter1, rutan2 to be directed to the page with a list of conversations(chats.tsx).

const Home: FC = () => {

  const { setUser } = useContext<User | null>(UserContext) ?? {};


  const userName = useRef<HTMLInputElement>(null);
  const router = useRouter();



  //Checks if the input exist as a user in the database
  const loginUser = (e: React.MouseEvent) => {
    e.preventDefault();

    if (userName.current && userName.current.value !== "") {

      const userId: string = userName.current.value;
      const reference = ref(db)

      get(child(reference, 'users/' + userId)).then((snapshot) => {
        const data = snapshot.exists();

        if (data) {
          // setIsLoggedIn(true);
          console.log(userId + " is logged in")
          if (setUser) {
            setUser(userId)
          }
          router.push("/chats")
        } else {
          console.log("Wrong username")
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <div className=" flex flex-col bg-brown text-center">
        <form action="">
          <label htmlFor="userID" className="p-3">Identification</label>
          <input ref={userName} placeholder="Your user ID..." className="m-3 p-1 rounded-xl text-dark" id="userID" type="text" />
        </form>
        <button onClick={loginUser} className="bg-beige p-1.5 rounded-full text-dark mb-4 shadow">Log in</button>
      </div >
    </>
  )
}

export default Home;