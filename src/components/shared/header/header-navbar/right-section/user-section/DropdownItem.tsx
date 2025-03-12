import Link from "next/link";

type DropdownItemProps = {
  href: string;
  text: string;
};

export const DropdownItem = ({ href, text }: DropdownItemProps) => {
  return (
    <li>
      <Link href={href} className="block py-1 text-gray-700 hover:text-black">
        {text}
      </Link>
    </li>
  );
};
