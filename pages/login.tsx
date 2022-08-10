import Layout from '../components/Layout'
import Link from 'next/link'

export default function Login() {
    return (
        <>
            <Layout pageTitle='Login'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-gray-900">Lorem ipsum dolor sit amet.</h1>
                            <p className="leading-relaxed mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nam assumenda doloremque exercitationem qui adipisci laborum, neque fuga odio ipsum.</p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-gray-900 text-lg text-center font-medium title-font mb-5">Log in to your account</h2>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor='password' className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <p className="text-xs text-gray-500 mt-2">Forgot the password?</p>
                            </div>
                            <Link href='/user-dashboard'>    
                            <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 font-semibold rounded">Login</button>
                            </Link>
                            <p className="text-xs text-center text-gray-500 mt-5">Don't have an account yet?</p>
                            <Link href='/register'>
                                <button className="mt-5 py-2 px-8 bg-transparent hover:bg-green-500 text-green-600 font-semibold hover:text-white border border-green-500 hover:border-transparent rounded">Register Now</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
