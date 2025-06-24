import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../Loader";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [pregnancyStartDate, setPregnancyStartDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setLoading(true);
      await axios.post(`https://babysteps-z8jn.onrender.com/api/auth/signup`, {
        email,
        name,
        password,
        pregnancyStartDate,
      });
      alert("Signup successful!");
      navigate("/");
    } catch (err) {
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-20 bg-white">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Signup</h1>
        <input
          type="email"
          className="border p-2 mb-3 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 mb-3 w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 mb-3 w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 mb-3 w-full"
          placeholder="Pregnancy Start Date"
          value={pregnancyStartDate}
          onChange={(e) => setPregnancyStartDate(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 w-full rounded-md"
          onClick={handleSignup}
        >
          {loading ? <Loader color="white" /> : "Signup"}
        </button>
        <p className="mt-3 text-sm text-center">
          Already registered?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
