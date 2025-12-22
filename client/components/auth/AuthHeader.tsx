type Props = {
  title?: string;
  subtitle?: string;
};

const AuthHeader = ({
  title = "Masuk ke BukuKu",
  subtitle = "Kelola dan temukan buku favoritmu dengan mudah",
}: Props) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900">
        {title.split("BukuKu")[0]}
        <span className="text-accent">BukuKu</span>
      </h1>
      <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default AuthHeader;
