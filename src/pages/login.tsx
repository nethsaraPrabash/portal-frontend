import { useState } from 'react';
import { loginUser } from '../api/user';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem('jwt', res.token);
      alert('Login successful');
      window.location.href = '/dashboard'; // Redirect to dashboard after successful login
    } catch (err) {
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const navigateRegister = () => {
    window.location.href = '/register';
  }

  return (
    <div className='flex items-center min-h-screen justify-center bg-gray'>
      <div className="flex rounded-2xl p-3 shadow-lg max-w-3xl bg-gray-100">
        <div className="w-1/2 md:block hidden h-[28rem]">
          <img
            src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="
            alt="login image"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-500" />
          </div>

          <div className="text-sm flex justify-between items-center mt-3">
            <p>Don't have any account!</p>
            <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400" onClick={navigateRegister}>Register</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default login