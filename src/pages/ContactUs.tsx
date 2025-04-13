
export default function ContactUs() {
  return (
    <section id="contact" className="relative md:py-20">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute w-[500px] h-[500px] bg-primary opacity-20 rounded-full blur-3xl"
          style={{ bottom: "-10%", right: "0%" }}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl w-2/3 text-center font-bold mb-6 border-b-4 border-dashed border-primary inline-block pb-4">
          Let's Connect!
        </h1>
      </div>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Form */}

        <div className="w-full md:w-2/6 text-white z-20">
          <form className="mt-10 space-y-6">
            <div>
              <label className="block mb-2 font-bold">Name:</label>
              <input
                type="text"
                placeholder="What's your name?"
                className="w-full px-4 py-3 rounded border border-dashed border-primary bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
              />
            </div>
           
            <div>
              <label className="block mb-2 font-bold">Message:</label>
              <textarea
                placeholder="Lets connect!"
                rows={5}
                className="w-full px-4 py-3 rounded border border-dashed border-primary bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary w-full text-black font-bold py-3 px-6 rounded hover:opacity-90 transition-all"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className=" w-full md:w-1/2 mt-12 flex justify-center">
          <img
            src="/contact.png"
            alt="Connect Illustration"
            className="max-w-md w-full rounded"
          />
        </div>
      </div>
    </section>
  );
}
