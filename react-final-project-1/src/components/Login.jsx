import React from 'react'
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../context/FormContext';

const schema = object({
  email: string().required().email(),
  password: string().required().min(8)
})

const initialData = {
  email: "",
  password: ""
}

function Login() {
  const { login, handleLogin } = useContext(FormContext);
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: initialData,
    validationSchema: schema,
    onSubmit: value => {
      if(value){
        handleLogin(!login);
        navigate('/products');
      }

      formik.resetForm();
    }
  })

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-300 px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center text-gray-800">Login to Your Account</h2>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
          {errors.email && touched.email && <p className="text-red-400">{errors.email}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
          />
          {errors.password && touched.password && <p className="text-red-400">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?
          <a href="#" className="text-indigo-600 hover:underline ml-1">Sign up</a>
        </p>
      </form>
    </div>

  )
}

export default Login