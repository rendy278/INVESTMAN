import { forwardRef } from "react";
import clsx from "clsx";
import { TbMenu2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import Logo from "./Logo";

const Appscreen = ({ children, className, ...props }) => {
  return (
    <div className={clsx("flex-col flex ", className)} {...props}>
      <div className="flex justify-between items-center px-4 pt-4 ">
        <TbMenu2 className="text-xl text-white cursor-pointer" />
        <Logo className=" text-xl text-white " />
        <FaUser className="text-xl text-white cursor-pointer" />
      </div>
      {children}
    </div>
  );
};
Appscreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  );
});

Appscreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  );
});

Appscreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div ref={ref} className={clsx("mt-6 flex-auto  bg-gray-100", className)}>
      {children}
    </div>
  );
});

Appscreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  );
});
export default Appscreen;
