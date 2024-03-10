import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300">
      <Container>
        <div className="flex lg:flex-row justify-center flex-col gap-5  sm:justify-between items-center py-4 ">
          <p>
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className="flex gap-3 items-center">
            <p className=" cursor-pointer hover:text-blue-500">
              Privacy & Policy
            </p>
            <div className="border border-gray-300 rounded-full h-6 "></div>
            <p className="cursor-pointer hover:text-blue-500">
              Teams Of Service
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
