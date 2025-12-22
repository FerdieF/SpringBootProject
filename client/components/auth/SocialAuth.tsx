import SocialAuthButton from "./SocialAuthButton";

const SocialAuth = () => {
  return (
    <div className="mt-8 space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-400">
            atau lanjutkan dengan
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <SocialAuthButton icon="/icons/google.svg" label="Google" />
        <SocialAuthButton icon="/icons/github.svg" label="Github" />
        <SocialAuthButton icon="/icons/facebook.svg" label="Facebook" />
      </div>
    </div>
  );
};

export default SocialAuth;
