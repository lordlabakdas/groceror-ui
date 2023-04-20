import axios from "axios";
import { useState } from "react";


function RegisterForm({ setCount }: { setCount: any }) {

    interface User {
        name: string
        email: string
        address: string
        entity_type: string
        username: string
        password: string
    }

    let initialState: User = {
        name: "",
        email: "",
        address: "",
        entity_type: "",
        username: "",
        password: ""
    }

    const [name, setName] = useState<string>(initialState.name)
    const [email, setEmail] = useState<string>(initialState.email)
    const [address, setAddress] = useState<string>(initialState.address)
    const [entity_type, setEntity_Type] = useState<string>(initialState.entity_type)
    const [username, setUserName] = useState<string>(initialState.username)
    const [password, setPassword] = useState<string>(initialState.password)
    const [user, setUser] = useState<User>(initialState)

    const handleInput = (event: HTMLInputElement) => {
        setUser({ ...user, [event.id]: event.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log(user)
        axios.post('https://grocerorapi.herokuapp.com/user/register', { user })
            .then(response => console.log(response.data))
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg -space-y-4'>
            <h2 className='text-4xl dark:text-white font-bold text-center'>Register</h2>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Name:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="text"
                    id="name"
                    onChange={(e) => handleInput(e.target)} />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Email:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="text"
                    id="email"
                    onChange={(e) => handleInput(e.target)} />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Address:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="text"
                    id="address"
                    onChange={(e) => handleInput(e.target)} />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Entity_Type:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="text"
                    id="entity_type"
                    onChange={(e) => handleInput(e.target)} />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Username:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="text"
                    id="username"
                    onChange={(e) => handleInput(e.target)} />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="password"
                    id="password"
                    onChange={(e) => handleInput(e.target)} />
            </div>
            {/* <div className='flex flex-col text-gray-400 py-2'>
                <label>Confirm Password:</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                    type="password" />
            </div> */}
            <br></br>
            <button className='w-full py-2 bg-teal-500 hover:bg-teal-700 \
             border-teal-500 hover:border-teal-700 text-sm border-4 \
              text-white py-1 px-2 rounded-lg'>
                Sign Up
            </button>
            <br></br>
            <br></br>
            <p className=' text-gray-400 py-2'>Already registered?</p>
            <p className=' text-gray-400 py-2 underline'>
                <button className="underline"
                    onClick={() => setCount(1)} type="button">
                    Sign In
                </button>
            </p>
        </form>
    )




}

export default RegisterForm