import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyAddedProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API}/allProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, [user]);
  console.log(myProducts);

  // const { data: products = [] } = useQuery(["products"], async () => {
  //   const res = await fetch(
  //     `${import.meta.env.VITE_SERVER_API}/products/${user?.email}`
  //   );
  //   return res.json();
  // });
  // console.log(products);

  return (
    <div className="w-full">
      <h2 className="text-5xl text-center font-description">
        My Added Products
      </h2>
    </div>
  );
};

export default MyAddedProducts;
