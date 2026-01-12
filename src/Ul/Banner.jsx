import React from 'react'

function Banner() {
  return (
 <div className="bg-gray-100 relative max-w-4xl mx-auto rounded-sm overflow-hidden mt-4 pt-[160px]">
  <div className="grid md:grid-cols-2 items-center max-md:gap-10 py-10 border-y-8 border-orange-400">
    <div className="text-center px-6">
      <h2 className="font-extrabold text-5xl text-orange-500 leading-tight">
        <span className="text-slate-900">Special</span> Offer
      </h2>
      <h6 className="text-2xl text-slate-900 mt-2">Limited Time Deal</h6>
      <p className="text-slate-900 text-base leading-relaxed mt-4">
        Discover amazing discounts and deals. Don't miss out on our exclusive
        offers for a limited time.
      </p>
      <button
        type="button"
        className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-medium text-[15px] py-3 px-6 rounded-lg w-max cursor-pointer mt-12"
      >
        Get Started
      </button>
    </div>
    <div className="bg-gradient-to-tr from-orange-400 to-orange-600 rounded-tl-full rounded-bl-full w-full h-max">
      <div className="p-2">
        <img
          src="https://readymadeui.com/team-image.webp"
          className="h-64 w-64 rounded-full object-cover border-4 border-white"
          alt="img"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner
