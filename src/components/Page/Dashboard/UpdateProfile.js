import React from 'react';
import useProfileId from '../../../hooks/useProfileId';

const UpdateProfile = () => {

    const imgStorageApi = "565ec72d72ebf086ade85d5608107f46";
    const [id] = useProfileId()
     const handleUpdate = (e) => {
       e.preventDefault();
       const name = e.target.name.value;
       const email = e.target.email.value;
       const phone = e.target.phone.value;
       const address = e.target.address.value;
       const education = e.target.education.value;
       const linkedin = e.target.linkedin.value;
       const img = e.target.image;
       const profileUpdate = {img,name,email,phone,address,education,linkedin,
       };
       console.log(profileUpdate);
          fetch(`http://localhost:5500/update/${id[0]._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(profileUpdate),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
       e.target.reset();
     };
    return (
      <div>
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            <h3 class="text-lg text-center font-bold">Update Your Profile</h3>
            <form onSubmit={handleUpdate}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={id[0]?.email}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold ">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold ">Location</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold ">Education</span>
                </label>
                <input
                  type="text"
                  name="education"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold ">
                    LinkedIn Profile{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="linkedin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold ">
                     Profile Image{" "}
                  </span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className=" mt-2 btn w-full max-w-xs text-white">
                <input for="my-modal-3" type="submit" value="Update" />
              </div>
            </form>
          </label>
        </label>
      </div>
    );
};

export default UpdateProfile;