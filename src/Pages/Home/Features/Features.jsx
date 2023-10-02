const Features = () => {
  return (
    <div className="py-20">
      <h2 className="text-5xl my-10 font-description text-center">
        Our Features
      </h2>
      <div
        className="md:flex gap-10 px-5 justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex items-center border hover:shadow-xl p-5 rounded-3xl gap-3">
          <img
            className="w-28"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-shipping-design-template-62c154107c385e27756564fcf74622fb_screen.jpg?ts=1629452230"
            alt=""
          />
          <div>
            <h3 className="text-2xl">Free Shipping</h3>
            <p className="text-lg">Free Shipping for orders over $100.</p>
          </div>
        </div>
        <div className="flex items-center border hover:shadow-xl p-5 rounded-3xl gap-3">
          <img
            className="w-28"
            src="https://static.vecteezy.com/system/resources/previews/012/874/882/original/money-back-guarantee-icon-style-vector.jpg"
            alt=""
          />
          <div>
            <h3 className="text-2xl">Money Guarantee</h3>
            <p className="text-lg">Within 30 days for an exchange.</p>
          </div>
        </div>
        <div className="flex items-center border hover:shadow-xl p-5 rounded-3xl gap-3">
          <img
            className="w-28"
            src="https://static.vecteezy.com/system/resources/thumbnails/000/351/948/small/3__2825_29.jpg"
            alt=""
          />
          <div>
            <h3 className="text-2xl">Online Support</h3>
            <p className="text-lg">24 hours active online support</p>
          </div>
        </div>
        <div className="flex items-center border hover:shadow-xl p-5 rounded-3xl gap-3">
          <img
            className="w-28"
            src="https://thumbs.dreamstime.com/b/flexible-loan-grey-icon-isolated-white-background-vector-symbol-sign-illustration-design-225964469.jpg"
            alt=""
          />
          <div>
            <h3 className="text-2xl">Flexible Payment</h3>
            <p className="text-lg">Pay with multiple cards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
