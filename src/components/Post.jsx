import userava1 from "../images/userava1.jpg";

const Post = () => {
  return (
    <section className="py-24 bg-black text-gega-grey">
      {/* <!-- Container --> */}
      <div className="container px-5 lg:px-0">
        {/* <!-- Title --> */}
        <h2 className="text-gega-red">
          <a href="#"> Popular Posts</a>
        </h2>
        {/* <!-- Grid Area --> */}
        <div className="grid grid-cols-6 gap-10">
          {/* <!-- Post 1 --> */}
          <div className="col-span-6 md:col-span-3 border border-gega-red">
            {/* <!--Post 1 Header--> */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <img src={userava1} alt="" className="rounded-full" />
            </div>
            {/* <!--Post 1 Parag--> */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              corporis modi minus, ab harum eius?
            </p>
            {/* <!--Post 1 Footer--> */}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu tex-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>9</p>
              </div>
            </div>
          </div>
          {/* <!-- Post 2 --> */}
          <div className="col-span-6 md:col-span-3 border border-gega-red">
            {/* <!--Post 2 Header--> */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <img src={userava1} alt="" className="rounded-full" />
            </div>
            {/* <!--Post 2 Parag--> */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              corporis modi minus, ab harum eius?
            </p>
            {/* <!--Post 2 Footer--> */}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu tex-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>9</p>
              </div>
            </div>
          </div>
          {/* <!-- Post 3 --> */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
            {/* <!--Post 3 Header--> */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <img src={userava1} alt="" className="rounded-full" />
            </div>
            {/* <!--Post 3 Parag--> */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              corporis modi minus, ab harum eius?
            </p>
            {/* <!--Post 3 Footer--> */}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu tex-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>9</p>
              </div>
            </div>
          </div>
          {/* <!-- Post 4 --> */}
          <div className="hidden md:block md:col-span-3 lg:col-span-4 border border-gega-red">
            {/* <!--Post 4 Header--> */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <img src={userava1} alt="" className="rounded-full" />
            </div>
            {/* <!--Post 4 Parag--> */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              corporis modi minus, ab harum eius?
            </p>
            {/* <!--Post 4 Footer--> */}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu tex-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>9</p>
              </div>
            </div>
          </div>
          {/* <!-- Post 5 --> */}
          <div className="hidden md:block md:col-span-3 lg:col-span-4 border border-gega-red">
            {/* <!--Post 5 Header--> */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <img src={userava1} alt="" className="rounded-full" />
            </div>
            {/* <!--Post 5 Parag--> */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              corporis modi minus, ab harum eius?
            </p>
            {/* <!--Post 5 Footer--> */}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu tex-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>9</p>
              </div>
            </div>
          </div>
          {/* <!-- Post 6 --> */}
          <div className="hidden md:block md:col-span-3 lg:col-span-2 border border-gega-red">
            {/* <!--Post 6 Header--> */}
            <div className="border-b border-gega-red p-4 flex items-center justify-between">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <img src={userava1} alt="" className="rounded-full" />
            </div>
            {/* <!--Post 6 Parag--> */}
            <p className="p-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              corporis modi minus, ab harum eius?
            </p>
            {/* <!--Post 6 Footer--> */}
            <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu tex-xs">
              <p>ON DEC 17, 2022</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
