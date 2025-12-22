import Image from "next/image";

type Props = {
  icon: string;
  label: string;
  onClick?: () => void;
};

const SocialAuthButton = ({ icon, label, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
    >
      <Image src={icon} alt={label} width={20} height={20} />
      {label}
    </button>
  );
};

export default SocialAuthButton;
