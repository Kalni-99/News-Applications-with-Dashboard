
export default function AdminLogin() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navigation */}
            <nav className="bg-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-xl font-bold">Your Brand</a>
                    <div>
                        <a href="#" className="mr-4 text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Admin Login</a>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="py-6 flex flex-col justify-center sm:py-12">
                <div className="relative sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto space-y-8">
                            <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
                            <form className="space-y-6">
                                <div className="rounded-md shadow-sm">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                    <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div className="rounded-md shadow-sm">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
