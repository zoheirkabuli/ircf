import Link from 'next/link';
import Image from 'next/image';

// * assets
import logo from '@/assets/img/cflogo.png';

const Header = () => {
  return (
    <header className="flex justify-center py-[15px] bg-[#FF7900] shadow-lg">
      <nav className="flex items-center justify-between w-[95%]">
        <Link href="/" className="flex items-center gap-[10px]">
          <Image src={logo} alt="IRCF" width="60" />
          <h1 className="text-[20px] font-extrabold text-white">
            اینترنت برای همه
          </h1>
        </Link>
        <Link
          href="/send"
          type="button"
          className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
        >
          ارسال
        </Link>
      </nav>
    </header>
  );
};

export default Header;
