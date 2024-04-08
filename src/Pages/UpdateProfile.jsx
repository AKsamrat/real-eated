import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import app from '../FireBase/Firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
const auth = getAuth(app);

const UpdateProfile = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password } = data;

    updateProfile(auth.currentUser, {
      displayName: data.name,
      photoURL: data.photo,
    });
    // if (result.user) {
    //   // navigate(form);
    // }
  };
  return (
    <div>
      <div className=" lg:pl-32">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Profile Update</h1>
            <p className="text-sm dark:text-gray-600">
              Please Enter your new Data
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="space-y-12"
          >
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Your Name</label>
                <input
                  {...register('name', { required: true })}
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="A k samrat"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div>
                <label className="block mb-2 text-sm">Photo Url</label>
                <input
                  {...register('photo', { required: true })}
                  required
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="photo Url"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.photo && <span>This field is required</span>}
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
