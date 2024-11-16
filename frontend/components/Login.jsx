// https://play.tailwindcss.com/NyHu3IX3EL

export default function Login() {
    return <div className="flex justify-center items-center h-dvh bg-gray-100">
        <div className="md:w-1/4 border-2 shadow-xl bg-gray-200 sm:w-3/4 rounded-lg p-8">
            <div className="text-center text-3xl font-mono underline p-2 py-8">
                <h1>User Registeration</h1>
            </div>
            <div className="bg-gray-300 text-lg mx-8 py-8 mb-8 rounded-lg">
                <form action="" method="post" className="flex flex-col p-2 px-4 items-center">
                    <input placeholder="username" className="border-1 border-blue-900 rounded-md m-2 p-1 px-2 w-3/4" type='text' />
                    <input placeholder="password" className="border-1 border-blue-900 rounded-md m-2 p-1 px-2 w-3/4" type='password' />
                    <input placeholder="password" className="border-1 border-blue-900 rounded-md m-2 p-1 px-2 w-3/4" type='password' />
                    <button type="submit" className="bg-blue-200 py-1 rounded-lg mt-4 px-8">Login</button>
                </form>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
}
