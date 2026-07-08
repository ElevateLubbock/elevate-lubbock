import Link from "next/link";

type LogoProps = {
  variant?: "default" | "light";
  showLink?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Logo({
  showLink = true,
  className = "",
  onClick,
}: LogoProps) {
  const content = (
  <span className="inline-flex items-center gap-2.5">
    <img
      src="/brand/elevate-icon.svg"
      alt=""
      className="h-8 w-auto"
    />

    <span className="flex flex-col leading-none">
      <img
  src="/brand/elevate-wordmark.svg"
  alt="Elevate Lubbock"
  className="h-6 w-auto"

/>

      <span className="mt-1 hidden whitespace-nowrap text-[0.58rem] tracking-[-0.02em] text-[#111111]/45 sm:block">
        Designed for Growth. Built for Lubbock.
      </span>
    </span>
  </span>
);

  const sharedClass = `inline-flex items-center ${className}`;

  if (!showLink) {
    return <div className={sharedClass}>{content}</div>;
  }

  return (
    <Link href="/" className={sharedClass} onClick={onClick}>
      {content}
    </Link>
  );
}