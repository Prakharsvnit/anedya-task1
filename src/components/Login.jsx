import React,{useState} from 'react'

const Login = () => {

    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   
    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(formData);
    };
  return (
    <div className="flex justify-center items-center h-screen">
    <form onSubmit={handleSubmit} className="bg-white w-96 shadow-md rounded px-8 pt-6 pb-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="admin"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="admin"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
    </div>
  )
}

export default Login