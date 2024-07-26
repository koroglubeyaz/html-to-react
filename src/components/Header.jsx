const Header = () => {
  return (
    <header className="bg-black text-gega-grey uppercase py-6 lg:py-12">
      {/* <!-- HeaderContainer --> */}
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
        {/* <!-- Logo --> */}
        <a
          href="#"
          className="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
        >
          GEGA
        </a>
        {/* <!-- Mobile Navigation --> */}
        <div className="block md:hidden pr-4">
          <div className="space-y-1 cursor-pointer">
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
          </div>
        </div>

        {/* <!-- Navigation --> */}
        <nav className="hidden md:flex justify-between flex-1">
          {/* <!-- Menu --> */}
          <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
            <a href="#" className="hover:text-gega-melon transition">
              movies
            </a>
            <a href="#" className="hover:text-gega-melon transition">
              celebrities
            </a>
            <a href="#" className="hover:text-gega-melon transition">
              blog
            </a>
            <a href="#" className="hover:text-gega-melon transition">
              news
            </a>
            <a href="#" className="hover:text-gega-melon transition">
              about
            </a>
          </div>
          {/* <!-- Login Area --> */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {/* <!-- Search --> */}
            <form>
              <div className="group border-r border-gega-red px-4 mx-4 py-1">
                <input
                  type="text"
                  className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition"
                />
                <button className="-ml-4 group-hover:ml-0 transition">
                  <i className="fas fa-search group-hover:text-gega-red transition"></i>
                </button>
              </div>
            </form>
            {/* <!-- Login --> */}
            <div className="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
              <a href="#">Login</a>
              <a
                href="#"
                className="bg-gega-red px-3 py-1 hover:bg-rose-600 hover:text-gega-grey transition whitespace-nowrap"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
