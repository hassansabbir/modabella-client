const BeASeller = () => {
  return (
    <div>
      <h2 className="text-5xl font-display text-center my-5 font-semibold">
        Be A Seller
      </h2>
      <h2 className="text-3xl text-center">
        Welcome to ModaBella - Your Gateway to E-Commerce Success!
      </h2>
      <div className="mt-20 px-52">
        <p className="text-xl text-center">
          Are you passionate about your products or services and eager to
          showcase them to a global audience? Become a seller on [Website Name]
          and unlock the potential to grow your business like never before! Our
          platform empowers entrepreneurs, artisans, and businesses to connect
          with customers around the world.
        </p>

        <div className="mt-20 bg-red-100 p-10 rounded-3xl shadow-md">
          <h2 className="text-4xl my-5">Why Sell on ModaBella?</h2>
          <ul>
            <li>
              &#8226; <span className="font-bold">Global Reach:</span> Reach
              customers beyond borders and tap into new markets.
            </li>
            <li>
              &#8226; <span className="font-bold">User-Friendly Platform:</span>{" "}
              Easily manage your products, inventory, and orders through our
              intuitive seller dashboard.
            </li>
            <li>
              &#8226; <span className="font-bold">Secure Transactions:</span>{" "}
              Benefit from a secure and reliable payment system for seamless
              transactions.
            </li>
            <li>
              &#8226; <span className="font-bold">Marketing Support:</span>{" "}
              Leverage our marketing channels to boost your visibility and
              sales.
            </li>
            <li>
              &#8226; <span className="font-bold">Customer Trust:</span> Join a
              platform known for its commitment to quality and customer
              satisfaction.
            </li>
          </ul>
        </div>
        <div className="my-10 text-center">
          <button className="btn btn-outline shadow-xl">
            Send A Seller Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeASeller;
