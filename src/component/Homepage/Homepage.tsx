function Homepage() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 justify-center min-h-screen px-6">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <p className="text-xl md:text-2xl font-medium text-gray-600">
          Hello, I'm Ajay
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="block">Full Stack</span>
          <span className="block text-blue-500">Developer</span>
        </h1>
        <button className="mt-5 bg-orange-300 pl-5 pr-5 px-2 py-2 shadow-lg hover:scale-120 transition duration-300">
          Resume
        </button>
      </div>

      {/* Image Section */}
      <div className="rounded-full border-[6px] border-gray-200 p-2 shadow-lg relative">
        <img
          src="/avatar.jpg"
          alt="Ajay Avatar"
          className="rounded-full object-cover w-60 h-60 md:w-72 md:h-72"
        />
      </div>
    </section>
  );
}

export default Homepage;
