import clsx from "clsx";
function Container({ className, ...props }) {
  return (
    <div
      className={clsx(
        "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    ></div>
  );
}

export default Container;
