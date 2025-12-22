import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import SignInForm from "@/components/auth/SignInForm";
import SocialAuth from "@/components/auth/SocialAuth";

const page = () => {
  return (
    <AuthCard>
      <AuthHeader
        title="Masuk ke BukuKu"
        subtitle="Buat akun untuk mulai mengelola buku favoritmu"
      />
      <SignInForm />
      <SocialAuth />
    </AuthCard>
  );
};

export default page;
