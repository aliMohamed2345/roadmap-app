import AuthWindow from "@/app/components/Auth/AuthWindow";
import MainTitle from "@/app/components/Home/MainTitle";
const Auth = () => {
  return (
    <div className="container mx-auto px-2 ">
      <div className="absolute inset-1/2 -translate-1/2 w-125 h-fit flex items-center flex-col gap-10">
        <MainTitle />
        <AuthWindow />
      </div>
    </div>
  );
};

export default Auth;
