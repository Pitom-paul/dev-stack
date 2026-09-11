import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center">
              <img
                src={logoText}
                alt="Dev Stack"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-pink-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-400 transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-400 transition hover:text-pink-500"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 transition hover:text-pink-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-400 transition hover:text-pink-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-pink-500"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-pink-500"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-100 pt-7">
          <p className="text-sm text-gray-300">
            © 2026 Dev Stack. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;