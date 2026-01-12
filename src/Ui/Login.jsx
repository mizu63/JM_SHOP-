import React from 'react'

const Login = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#7E5CA8] to-[#2976BC]">
      <div className="bg-gradient-to-r from-[#77C0E9] to-[#2976BC] p-6  shadow-black shadow-2xl rounded-tl-[150px] w-[400px] h-[500px] flex flex-col justify-center">
        <h1 className="text-3xl text-white font-bold text-center mb-6">Sign in</h1>

        <form>
          <div className="flex flex-col gap-2 mb-6 px-3">
            <div>
              <label className='text-lg text-white text-shadow-2xs'>UserName</label>
              <input 
                className="w-full border-3 border-gray-700 rounded-2xl p-2 text-white text-shadow-2xs"
                type="text" placeholder="Name" />
            </div>
            <div>
              <label className='text-lg text-white text-shadow-2xs'>Email Address</label>
              <input
                className="w-full border-3 border-gray-700 rounded-2xl p-2 text-white text-shadow-2xs"
                type="email" placeholder="Email" />
            </div>
            <div>
              <label className='text-lg text-white text-shadow-2xs'>Password</label>
              <input 
                className="w-full border-3 border-gray-700 rounded-2xl p-2 text-white text-shadow-2xs"
                type="password" placeholder="Password" />
            </div>
          </div>
        

          <button className="text-2xl bg-black px-6 py-2 rounded-full text-white block mx-auto hover:bg-blue-600  transition">
            Login
          </button>
        </form>
      </div>

    </section>

  )
}

export default Login
