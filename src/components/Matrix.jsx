import matrix from "../images/matrix.png";

const Matrix = () => {
  return (
    <section className="bg-gega-white">
      <div className="container flex items-center justify-center relative">
        {/* <!--Left Content--> */}
        <div className="basis-1/3 lg:basis-1/2 hidden md:block">
          <img src={matrix} alt="" className="lg:absolute lg:bottom-0" />
        </div>
        {/* <!--Right Content--> */}
        <div className="basis-2/3 lg:basis-1/2 z-50">
          {/* <!-- Right Content Container--> */}
          <div className="flex flex-col justify-center py-10 px-10 md:pl-0">
            <h3 className="tracking-wider text-gega-melon">
              ACTION, DRAMA, THRRILLER
            </h3>
            <h2 className="mb-2">MATRİX RELOADED</h2>
            <p className="text-sm mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, natus. Lor sit amet consectetur adipisicing elit. Dicta,
              eaque.
            </p>
            <h3 className="tracking-wider text-gega-red">
              8 wins 34 nomitations
            </h3>
          </div>
        </div>
        {/* <!-- Oldie --> */}
        <div className="absolute -top-12 left-5 lg:left-0 w-24 h-24 bg-gega-melon rounded-full text-center flex items-center">
          <p className="font-gemunu uppercase font-bold text-xl text-gega-red -rotate-45">
            OLDIE & GOLDIE
          </p>
        </div>
        {/* <!-- Matrix Picture Right --> */}
        <div className="absolute w-[130px] -top-[45px] right-5 md:hidden">
          <img src={matrix} />
        </div>
      </div>
    </section>
  );
};

export default Matrix;
