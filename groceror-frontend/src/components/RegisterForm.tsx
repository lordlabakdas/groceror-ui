import axios from "axios";
import { useState } from "react";


function RegisterForm({ setCount }: { setCount: any }) {

    interface User {
        Username: string
        Password: string
    }

    let initialState: User = {
        Username: "",
        Password: "",
    }

    const [username, setUserName] = useState<string>(initialState.Username)
    const [password, setPassword] = useState<string>(initialState.Password)
    const [user, setUser] = useState<User>(initialState)

    const handleInput = (event:HTMLInputElement) => {
        setUser({...user, [event.id]: event.value})
    }


        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

            e.preventDefault();
            console.log(user)
            axios.post('https://jsonplaceholder.typicode.com/posts', {user})
                .then(response => console.log(response.data))
                .catch(err => console.log(err))

        }

        return (
            // <div className='grid h-screen w-full'>
            //     <div className='bg-gray-800 flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Register</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username:</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                        type="text"
                        id = "Username"
                        onChange={(e) => handleInput(e.target)} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password:</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                        type="password"
                        id = "Password"
                        onChange={(e) => handleInput(e.target)} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password:</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                        type="password" />
                </div>
                <br></br>
                <button className='w-full py-2 bg-teal-500 hover:bg-teal-700 \
             border-teal-500 hover:border-teal-700 text-sm border-4 \
              text-white py-1 px-2 rounded-lg'>
                    Sign Up
                </button>
                <p className=' text-gray-400 py-2'>Already registered?</p>
                <p className=' text-gray-400 py-2 underline'>
                    <button className="underline"
                        onClick={() => setCount(1)} type="button">
                        Sign In
                    </button>
                </p>
            </form>
            //     </div>
            // </div>
        )




    }

    export default RegisterForm