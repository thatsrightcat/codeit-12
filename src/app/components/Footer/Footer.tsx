import Image from "next/image";
import Link from "next/link";
import Facebook from "@icons/icon_sns_facebook.svg";
import Instagram from "@icons/icon_sns_instagram.svg";
import Twitter from "@icons/icon_sns_twitter.svg";
import Youtube from "@icons/icon_sns_youtube.svg";

export default function Footer() {
  return (
    <footer className="min-h-40 bg-primary py-8">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-3 text-lg text-[#4a524e] md:justify-between">
          <div className="">&copy; 2023 @codeit-2023</div>
          <div className="flex gap-7">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Facebook} alt="Facebook" width={20} height={20} />
            </Link>
            <Link
              href="https://x.com/?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Twitter} alt="Twitter" width={20} height={20} />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Youtube} alt="Youtube" width={20} height={20} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram} alt="Instagram" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
