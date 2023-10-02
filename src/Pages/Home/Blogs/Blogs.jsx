const Blogs = () => {
  return (
    <div className="my-20 max-w-7xl px-5 mx-auto">
      <h2 className="text-5xl text-center mb-10 font-description">Our Blogs</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="border p-3 hover:shadow-xl flex flex-col">
          <img
            className="w-96 h-64"
            src="https://img.freepik.com/free-photo/closeup-aerial-view-hands-using-laptop-tablet-with-wrapped-gifts_53876-95323.jpg?w=740&t=st=1688971530~exp=1688972130~hmac=92c54c4e64990a7e12df94bf36512558835b2c711bcdb47e82f231aa3f51676c"
            alt=""
          />
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-4xl my-5 font-description">
              Behind the Scenes: Fashion Week Insights
            </h2>
            <p className="text-xl line-clamp-2">
              Step into the fascinating world of fashion and uncover the
              creative process that goes into bringing runway designs to life.
              From conceptualization to production, delve into the
              behind-the-scenes journey of designers, stylists, models, and
              photographers, gaining a deeper appreciation for the artistry and
              dedication that shapes the fashion industry.
            </p>
            <div className="text-end mt-auto">
              <button className="btn btn-outline mt-5">Details</button>
            </div>
          </div>
        </div>
        <div className="border p-3 hover:shadow-xl flex flex-col">
          <img
            className="w-96 h-72"
            src="https://img.freepik.com/free-photo/fashion-girls_1157-5470.jpg?w=740&t=st=1688974129~exp=1688974729~hmac=5db3ed421ae7488413bb3eef6a74cd9930fc127adf9e0552bc02df3441dfe1d3"
            alt=""
          />
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-4xl my-5 font-description">
              Decoding Dress Codes: Wear for Different Occasions
            </h2>
            <p className="text-xl  line-clamp-2">
              Crack the code on dress codes and never feel underdressed or
              overdressed again. From black-tie galas to casual brunches, this
              guide provides insights into various dress codes and offers
              practical outfit suggestions to ensure you're appropriately
              dressed for any event.
            </p>
            <div className="text-end mt-auto">
              <button className="btn btn-outline mt-5">Details</button>
            </div>
          </div>
        </div>
        <div className="border p-3 hover:shadow-xl flex flex-col">
          <img
            className="w-96 h-64"
            src="https://img.freepik.com/free-photo/composition-random-objects_273443-451.jpg?w=740&t=st=1688970768~exp=1688971368~hmac=688173ddd0ee648694b4797a902497965fac75bd7e07f5a8e44788526fbf6aff"
            alt=""
          />
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-4xl my-5 font-description">
              Sustainable Fashion: A Guide to Ethical Shopping
            </h2>
            <p className="text-xl  line-clamp-2">
              Educate your readers about sustainable fashion choices,
              eco-friendly brands, and tips for conscious shopping.
            </p>
            <div className="text-end mt-auto">
              <button className="btn btn-outline mt-5">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
