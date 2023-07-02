import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const availableProducts = parseFloat(data.availableProducts);
    const price = parseFloat(data.price);
    const ratings = parseFloat(data.ratings);
    const addedProduct = {
      ...data,
      availableProducts,
      price,
      ratings,
      status: "pending",
    };
    fetch(`${import.meta.env.VITE_SERVER_API}/products`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Product Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
        reset();
      });
  };

  return (
    <div className="w-9/12 my-20 ">
      <h2 className="text-5xl text-center font-description">Add A Product</h2>
      <p className="text-2xl text-center my-10">
        Welcome to the 'Add Product' page! This is where you can showcase your
        fabulous fashion items to a wide audience. Ensure your products stand
        out by providing accurate and captivating descriptions. Capture the
        essence of your creations, including design details, materials used,
        available sizes, and vibrant color options. Don't forget to upload
        high-quality images that showcase your products in the best light. Help
        potential buyers envision themselves wearing your creations by providing
        engaging and informative descriptions. Get ready to expand your reach
        and make an impact in the fashion world by adding your unique products
        here.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Product Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="product name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Photo URL</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="text"
            placeholder="photoUrl"
            className="input input-bordered"
          />
          {errors.image && (
            <span className="text-red-600">Photo URL is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Product Category</span>
          </label>
          <input
            {...register("productCategory", { required: true })}
            type="text"
            placeholder="e.g., Shirt, Pants"
            className="input input-bordered"
          />
          {errors.productCategory && (
            <span className="text-red-600">Product Category is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Clothing Category</span>
          </label>
          <input
            {...register("clothingCategory", { required: true })}
            type="text"
            placeholder="e.g., Mens, Womans, Children"
            className="input input-bordered"
          />
          {errors.clothingCategory && (
            <span className="text-red-600">Clothing Category is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Brand</span>
          </label>
          <input
            {...register("brand", { required: true })}
            type="text"
            placeholder="brand name"
            className="input input-bordered"
          />
          {errors.brand && (
            <span className="text-red-600">Brand Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            {...register("sellerName", { required: true })}
            type="text"
            placeholder="Seller Name"
            defaultValue={user?.displayName}
            className="input input-bordered"
          />
          {errors.sellerName && (
            <span className="text-red-600">Seller Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Seller Email</span>
          </label>
          <input
            {...register("sellerEmail", { required: true })}
            type="text"
            placeholder="Seller email"
            defaultValue={user.email}
            className="input input-bordered"
          />
          {errors.sellerEmail && (
            <span className="text-red-600">seller Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Cloth Material</span>
          </label>
          <input
            {...register("material", { required: true })}
            type="text"
            placeholder="e.g., Cotton, Silk"
            className="input input-bordered"
          />
          {errors.material && (
            <span className="text-red-600">Material is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Available Products</span>
          </label>
          <input
            {...register("availableProducts", { required: true })}
            type="number"
            placeholder="available products"
            className="input input-bordered"
          />
          {errors.availableProducts && (
            <span className="text-red-600">Available Products is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Price</span>
          </label>
          <input
            {...register("price", { required: true })}
            type="text"
            placeholder="price"
            className="input input-bordered"
          />
          {errors.price && (
            <span className="text-red-600">Price is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Ratings</span>
          </label>
          <input
            {...register("ratings", { required: true })}
            type="text"
            placeholder="ratings"
            className="input input-bordered"
          />
          {errors.price && (
            <span className="text-red-600">Ratings is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Description</span>
          </label>
          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="description"
            className="input input-bordered"
          />
          {errors.description && (
            <span className="text-red-600">Description is required</span>
          )}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral" type="submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;
