/* eslint-disable react/no-unescaped-entities */

const Login = () => {
    return (
        <div className="mt-10">
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://i.ibb.co/Vqx95Xc/bkash-logo.png" alt="bkash" />
                </div>

                <form className="mt-6">
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                        <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            
                        </div>

                        <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Login
                        </button>
                    </div>
                </form>

                

                <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</a></p>
            </div>
        </div>
    )
}

export default Login
