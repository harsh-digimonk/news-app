import { format } from "date-fns";

const Header = () => {
  const today = new Date();
  const formattedDate = format(today, 'PPP');

  return (
    <header className="mb-5 backdrop-filter shadow-md backdrop-blur-md sticky top-0 z-50 m-auto place-items-center p-5 font-serif w-full">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        The New York Times
      </h1>
      <p>
        Top stories for today, {formattedDate}
      </p>
    </header>
  );
};

export default Header;
