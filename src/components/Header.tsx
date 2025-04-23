const Header = () => {
  const today = new Date().toDateString();
  const monthArray = today.split(" ").slice(1, 2);
  const month = monthArray[0] as keyof typeof formatMonths;
  let numDate = today.split(" ").slice(2).join(", ");

  if (numDate.charAt(0) === "0") {
    numDate = numDate.slice(1);
  }

  const formatMonths = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  return (
    <header className="mb-5 backdrop-filter shadow-md backdrop-blur-md sticky top-0 z-50 m-auto place-items-center p-5 font-serif w-full">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        The New York Times
      </h1>
      <p>
        Top stories for today, {formatMonths[month]} {numDate}
      </p>
    </header>
  );
};

export default Header;
