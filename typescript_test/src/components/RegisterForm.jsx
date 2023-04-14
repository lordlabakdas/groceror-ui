

function RegisterForm({setCount}) {


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Register</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>User Name:</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                            type="text" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password:</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 \
              focus:order-blue focus:bg-gray-800 focus:outline-none'
                            type="password" />
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
                        onClick={() => setCount(1)}>
                            Sign In
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )




}

export default RegisterForm