import RegisterForm from './register-form';

const RegisterPage = () => {
  return (
    <div className="flex justify-center ">
      <div className="max-w-max border p-6 px-10 min-w-96">
        <h1 className="text-xl mb-4">Đăng ký:</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
