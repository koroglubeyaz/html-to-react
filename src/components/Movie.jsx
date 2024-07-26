import mv1 from "../images/mv1.jpg";
import mv2 from "../images/mv2.jpg";
import mv3 from "../images/mv3.jpg";
import mv4 from "../images/mv4.jpg";
import mv5 from "../images/mv5.jpg";
import mv6 from "../images/mv6.jpg";
import new1 from "../images/new1.jpg";
import new2 from "../images/new2.jpg";
import new3 from "../images/new3.jpg";
import new4 from "../images/new4.jpg";
import new5 from "../images/new5.jpg";

const Movie = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        {/* <!-- Movie List --> */}
        <div className="basis-2/3">
          {/* <!-- List Title --> */}
          <div className="flex space-x-2 mb-8 pl-5 lg:pl-0 divide-x divide-gega-red divide-opacity-50">
            <h2 className="text-gega-grey hover:text-gega-red duration-500">
              <a href="#">Latest</a>
            </h2>
            <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
              <a href="#">Popular</a>
            </h2>
            <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
              <a href="#">Best</a>
            </h2>
          </div>
          {/* <!-- Movie Posters LEFT--> */}
          <div className="flex flex-wrap items-center">
            {/* <!-- Movie Poster--> */}
            {/* <!-- Poster 1--> */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src={mv1}
                alt="movie Image"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid, eum?
                </p>
                {/* <!-- Icons --> */}
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Poster 2--> */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src={mv2}
                alt="movie Image"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid, eum?
                </p>
                {/* <!-- Icons --> */}
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Poster 3--> */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src={mv3}
                alt="movie Image"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid, eum?
                </p>
                {/* <!-- Icons --> */}
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Poster 4--> */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src={mv4}
                alt="movie Image"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid, eum?
                </p>
                {/* <!-- Icons --> */}
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Poster 5--> */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src={mv5}
                alt="movie Image"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid, eum?
                </p>
                {/* <!-- Icons --> */}
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Poster 6--> */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src={mv6}
                alt="movie Image"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid, eum?
                </p>
                {/* <!-- Icons --> */}
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Poster 7--> */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
              <img
                src={mv1}
                alt="movie Image"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid, eum?
                </p>
                {/* <!-- Icons --> */}
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Poster 8--> */}
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
              <img
                src={mv2}
                alt="movie Image"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid, eum?
                </p>
                {/* <!-- Icons --> */}
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hot News RIGHT--> */}
        <div className="basis-1/3 pl-5 lg:pl-0">
          {/* <!--Title--> */}
          <h2 className="text-gega-grey mb-8">Hot News</h2>
          {/* <!--News Container--> */}
          <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
            {/* <!--Item1--> */}
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              {/* <!--News Image Container--> */}
              <div className="basis-1/3 h-full">
                <img src={new1} className="h-full w-full object-cover" alt="" />
              </div>
              {/* <!--Item Dteail--> */}
              <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, delectus.
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            {/* <!--Item2--> */}
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              {/* <!--News Image Container--> */}
              <div className="basis-1/3 h-full">
                <img src={new2} className="h-full w-full object-cover" alt="" />
              </div>
              {/* <!--Item Dteail--> */}
              <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, delectus.
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            {/* <!--Item3--> */}
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              {/* <!--News Image Container--> */}
              <div className="basis-1/3 h-full">
                <img src={new3} className="h-full w-full object-cover" alt="" />
              </div>
              {/* <!--Item Dteail--> */}
              <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, delectus.
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            {/* <!--Item4--> */}
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              {/* <!--News Image Container--> */}
              <div className="basis-1/3 h-full">
                <img src={new4} className="h-full w-full object-cover" alt="" />
              </div>
              {/* <!--Item Dteail--> */}
              <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, delectus.
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            {/* <!--Item5--> */}
            <div className="flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex">
              {/* <!--News Image Container--> */}
              <div className="basis-1/3 h-full">
                <img src={new5} className="h-full w-full object-cover" alt="" />
              </div>
              {/* <!--Item Dteail--> */}
              <div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, delectus.
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
