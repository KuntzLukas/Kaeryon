import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  className?: string;
};

export function Brand({ className }: BrandProps) {
  return (
    <Link className={className ? "brand " + className : "brand"} href="/" aria-label="KAERYON Startseite">
      <Image
        className="brand-mark"
        src="/brand/Logo_Kaeryon.png"
        alt="KAERYON"
        width={52}
        height={52}
        sizes="(max-width: 560px) 32px, 40px"
        priority
      />
      <span className="brand-wordmark">KAERYON</span>
    </Link>
  );
}
