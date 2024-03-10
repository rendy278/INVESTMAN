import Link from "next/link";
import clsx from "clsx";
const Logo = ({ className, ...props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx("text-2xl font-bold text-gray-600  skl", className)}
        data-text="INVESTMAN"
        {...props}
      >
        INVESTMAN
      </h2>
    </Link>
  );
};

export default Logo;
