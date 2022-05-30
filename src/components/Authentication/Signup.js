import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
  import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
 const [sendEmailVerification] = useSendEmailVerification(auth);
  const [googleUser] = useAuthState(auth);

  const profileUpdate =
    ({ name: googleUser?.displayName }, { email: googleUser?.email });

  useEffect(() => {
    fetch(
      `https://obscure-savannah-69297.herokuapp.com/update/${googleUser?.email}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(profileUpdate),
      }
    );
  }, [profileUpdate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let signInError;
  if (gUser || user) {
    toast.success("User Signup success")
  }
  if (loading || gLoading || updating) {
    return (
      <div className=" md:mt-60">
        <div className="w-20 mx-auto text-3xl font-bold ">Loading...</div>
      </div>
    );
  }
  if (error || gError || updatingError) {
    signInError = (
      <p className="my-2 text-red-500">
        {error?.message || gError?.message || updatingError}
      </p>
    );
  }

  const onSubmit = async (data, e) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    updateProfile({ displayName: data.name });

    const profileUpdate = ({ name: data.name }, { email: data.email });
    const email = data.email;
    fetch(`https://obscure-savannah-69297.herokuapp.com/update/${email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(profileUpdate),
    });
    console.log(data.email);
    await sendEmailVerification();
    alert('Email Verification send')
    navigate(from, { replace: true });
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Signup</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}{" "}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}{" "}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}{" "}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold ">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}{" "}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}{" "}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="signup"
            />
          </form>

          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-secondary hover:cursor-pointer">
              Please login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            {" "}
            Continue with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Signup;
