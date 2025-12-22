import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import SignUpForm from "@/components/auth/SignUpForm";
import SocialAuth from "@/components/auth/SocialAuth";

const page = () => {
  return (
    <AuthCard>
      <AuthHeader
        title="Daftar ke BukuKu"
        subtitle="Buat akun untuk mulai mengelola buku favoritmu"
      />
      <SignUpForm />
      <SocialAuth />
    </AuthCard>
  );
};

export default page;
