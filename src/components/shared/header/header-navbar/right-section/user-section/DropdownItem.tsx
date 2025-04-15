import Link from "next/link";

type DropdownItemProps = {
  href: string;
  text: string;
  className?: string;
};

export const DropdownItem = ({ href, text, className }: DropdownItemProps) => {
  return (
    <li className={`${className} py-1`}>
      <Link href={href} className="block py-1 text-gray-700 hover:text-black">
        {text}
      </Link>
    </li>
  );
};
