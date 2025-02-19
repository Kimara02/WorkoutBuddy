// import React from "react";

// const Signup = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-blue-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-96 border border-gray-300">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//           Create an Account
//         </h2>
//         <form>
//           {/* <div className="mb-4">
//             <label className="block text-gray-600 mb-1 font-medium">Full Name</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               placeholder="John Doe"
//             />
//           </div> */}
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               placeholder="johndoe@email.com"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-1 font-medium">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               placeholder="••••••••"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-sm text-gray-500 text-center mt-4">
//           Already have an account? <a href="/login" className="text-blue-500 font-medium">Log in</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useSignup } from "../../Hooks/UseSignup";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const {signup, error, isLoading} = useSignup();

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);

    // console.log(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled= {isLoading}
            className="w-full py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all"
          >
            Sign Up
          </motion.button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
