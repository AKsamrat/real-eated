import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    const name = form.get('name');
    const photo = form.get('photo');

    // creatUser(email, password)
    //   .then(result => {
    //     console.log(result.user);
    //   })
    //   .catch(error => {
    //     console.error(error.message);
    //   });

    // console.log(email, password, name, photo);
  };
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm dark:text-gray-600">
            Please Register your Account
          </p>
        </div>
        <form onSubmit={handleRegister} action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Your Name</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="A k samrat"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Photo Url</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="photo Url"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
              </div>
              <div className="relative">
                <input
                  type=""
                  name="password"
                  id="password"
                  required
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                <span className="absolute top-3 right-2"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="terms" id="" />{' '}
          <label>
            <a href="">Accept our terms and Condition</a>
          </label>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
              >
                Register
              </button>
            </div>
          </div>
        </form>
        <p className="px-6 text-sm text-center text-gray-600">
          Already have account
          <Link
            to={'/login'}
            rel="noopener noreferrer"
            href="#"
            className="hover:underline text-violet-600 font-bold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
