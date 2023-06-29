const Discount = () => {
  return (
    <div className="flex bg-red-200 text-red-500 py-10 justify-center gap-5">
      <p className="text-xl font-description">
        Super discount for your{" "}
        <span className="font-extrabold font-description text-red-6">
          first purchase.
        </span>
      </p>
      <p className="text-xl font-description">
        <span className="border border-dashed border-red-600 p-1">
          FRee15FiRst
        </span>{" "}
        use this code in checkout!
      </p>
    </div>
  );
};

export default Discount;
