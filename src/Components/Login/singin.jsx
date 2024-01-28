import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useState } from "react";

export default function SignIn() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [verify, setVerifying] = useState(false);

  console.log(verify);

  const handleGoogle = async (e) => {
    e.preventDefault();

    try {
      setVerifying(true);
      await auth.loginWithGoogle();
      navigate("/app");
    } catch (error) {
      setError("Error al iniciar sesión con Google. Intenta de nuevo.");
    } finally {
      setVerifying(false);
    }
  };

  const handleFacebook = async (e) => {
    e.preventDefault();

    try {
      setVerifying(true);
      await auth.loginWithFacebook();
      navigate("/app");
    } catch (error) {
      setError("Error al iniciar sesión con Facebook. Intenta de nuevo.");
    } finally {
      setVerifying(false);
    }
  };

  const handleGithub = async (e) => {
    e.preventDefault();

    try {
      setVerifying(true);
      await auth.loginWithGithub();
      navigate("/app");
    } catch (error) {
      setError("Error al iniciar sesión con Github. Intenta de nuevo.");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-active to-gray-400 ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative z-10 border-2 border-active">
        <img
          src="Logo.png"
          alt="Logo"
          className="w-40 h-40 rounded-full mx-auto mt-2 mb-4"
        />
        <h1 className="text-2xl text-center text-gray-700 mb-4 font-bold">
          Login In ViltoApp
        </h1>
        <form className="space-y-4">
          <button
            onClick={handleGoogle}
            className="w-full py-2 border-2 rounded-md mb-4 hover:bg-gray-100"
          >
            <div className="flex items-center justify-center">
              <img
                className="w-8 h-8 rounded-md mr-2"
                src="Google.png"
                alt="Workflow"
              />
              <span className="text-black">Google</span>
            </div>
          </button>
        </form>
        <form className="space-y-4">
          <button
            onClick={handleFacebook}
            className="w-full py-2 border-2 rounded-md hover:bg-gray-100 mb-4"
          >
            <div className="flex items-center justify-center">
              <img
                className="w-8 h-8 rounded-md mr-2"
                src="Facebook.png"
                alt="Workflow"
              />
              <span className="text-black">Facebook</span>
            </div>
          </button>
        </form>
        <form className="space-y-4">
          <button
            onClick={handleGithub}
            className="w-full py-2 border-2 rounded-md hover:bg-gray-100"
          >
            <div className="flex items-center justify-center">
              <img
                className="w-8 h-8 rounded-md mr-2"
                src="GitHub.png"
                alt="Workflow"
              />
              <span className="text-black">GitHub</span>
            </div>
          </button>
        </form>
        {error && (
          <div className="text-red-500 text-center text-lg m-2">{error}</div>
        )}
        <div className="text-center text-gray-500 text-sm m-3 hover:underline">
          <Link to={"/"}>Back to home</Link>
        </div>
      </div>
    </div>
  );
}
