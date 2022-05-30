import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    fetch("https://obscure-savannah-69297.herokuapp.com/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    e.target.reset();
  };

  return (
    <div className="grid justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full m-2 max-w-xs">
          <label className="label">
            <span className="label-text font-bold ">Parts Name</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true })}
          />
          {errors.exampleRequired && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>

        <div className="form-control w-full m-2 max-w-xs">
          <label className="label">
            <span className="label-text font-bold ">Picture Url</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("picture", { required: true })}
          />
          {errors.exampleRequired && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
        <div className="form-control w-full m-2 max-w-xs">
          <label className="label">
            <span className="label-text font-bold ">Price</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("price", { pattern: /^[0-9]+$/i, required: true })}
          />
          {errors.price?.type === "pattern" && (
            <span className="text-red-400">Input Number</span>
          )}
        </div>
        <div className="form-control w-full m-2 max-w-xs">
          <label className="label">
            <span className="label-text font-bold ">Quantity</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              pattern: /^[0-9]+$/i,
              required: true,
            })}
          />
          {errors.quantity?.type === "pattern" && (
            <span className="text-red-400">Input Number</span>
          )}
        </div>
        <div className="form-control w-full m-2 max-w-xs">
          <label className="label">
            <span className="label-text font-bold ">Minimum Order </span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("minimumOrder", {
              pattern: /^[0-9]+$/i,
              required: true,
            })}
          />{" "}
          {errors.minimumOrder?.type === "pattern" && (
            <span className="text-red-400">Input Number</span>
          )}
        </div>
        <div className="form-control w-full m-2 max-w-xs">
          <label className="label">
            <span className="label-text font-bold ">Description</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
        <div className="form-control w-full m-2 max-w-xs">
          <input className="btn" type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
