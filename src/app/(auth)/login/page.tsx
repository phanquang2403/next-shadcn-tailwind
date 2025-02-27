import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <div className="flex justify-center ">
      <div className="max-w-max border p-6 px-10 min-w-96">
        <h1 className="text-xl mb-4">Đăng nhập:</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
