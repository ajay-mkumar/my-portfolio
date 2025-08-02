import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0F2027] via-[#203A43] to-[#2C5364] text-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Passionate frontend developer crafting smooth user experiences.
            Lover of cinema, gaming, and poetic code.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm flex flex-col">
          {["Home", "About", "Work", "Project"].map((label, index) => (
          <Link
          to={label.toLowerCase()}
            key={index}
            className="text-white hover:text-teal-300 transition cursor-pointer"
          >
            {label}
          </Link>
        ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Connect</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/ajay-mkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ajay-muthukumaran9836001a9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-teal-300 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Ajay Muthukumaran. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
