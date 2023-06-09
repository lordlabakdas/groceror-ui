import axios from "axios";
import { useState } from "react";


function LoginForm({ setCount }: { setCount: any }) {

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
    const [validUser, SetUserValidity] = useState<Boolean>(true)


    const handleInput = (event: HTMLInputElement) => {
        setUser({ ...user, [event.id]: event.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if (user.Username == "" || user.Password == "") {
            SetUserValidity(false);
            return;
        }

        SetUserValidity(true);
        console.log(user)
        axios.post('https://jsonplaceholder.typicode.com/posts', { user })
            .then(response => console.log(response.data))
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
            <h2 className='text-4xl dark:text-white font-bold text-center'>Login</h2>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Username:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
          focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="text"
                    id="Username"
                    onChange={(e) => handleInput(e.target)} />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="password"
                    id="Password"
                    onChange={(e) => handleInput(e.target)} />
            </div>
            {!validUser &&
                <p className=" text-red-600 py-2">
                    Invalid username or password!
                </p>
            }
            <br></br>
            <button className='w-full py-2 bg-teal-500 hover:bg-teal-700 \
             border-teal-500 hover:border-teal-700 text-sm border-4 \
              text-white py-1 px-2 rounded-lg'>
                Sign Up
            </button>
            <p className=' text-gray-400 py-2'>Need an Account?</p>
            <p className=' text-gray-400 py-2 underline'>
                <button className="underline"
                    onClick={() => setCount(0)} type="button">
                    Sign Up
                </button>
            </p>
        </form>
    )




}

export default LoginForm