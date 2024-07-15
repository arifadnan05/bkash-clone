/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form"

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register Your Account</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Name" className="block dark:text-gray-600">Name</label>
                        <input type="text" name="username" id="username" placeholder="Enter your name" className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="number" className="block dark:text-gray-600">Mobile</label>
                        <input type="number" name="password" id="password" placeholder="Enter Your Number" className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("mobile", { required: true })} />
                        {errors.mobile && <span>This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Email" className="block dark:text-gray-600">Email</label>
                        <input type="email" name="password" id="password" placeholder="Enter Your Email" className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="Role" className="block dark:text-gray-600">Select Role</label>
                        <select className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("role")}>
                            <option value="user">User</option>
                            <option value="agent">Agent</option>
                        </select>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </div>

                    <button className="block w-full p-3 text-center btn btn-neutral rounded-lg dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">

                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
