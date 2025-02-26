import RegisterForm from "./register-form";

const RegisterPage = () => {
  return (
    <div>
      <h1>Đăng ký</h1>
      <div className="flex justify-center border py-6">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
