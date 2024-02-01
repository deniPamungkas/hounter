const Footer = () => {
  return (
    <section className="w-full px-24 h-[180px] flex justify-between">
      <div className="w-[320px] h-full flex flex-col justify-between">
        <div className="w-[115px] flex items-center gap-x-5">
          <img src="images/logo.png" alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-semibold ">Hounter</span>
        </div>
        <p className="text-sm">
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </p>
        <div className="flex gap-x-3">
          <img src="images/facebook.png" alt="facebook" />
          <img src="images/twitter.png" alt="twitter" />
          <img src="images/instagram.png" alt="instagram" />
        </div>
      </div>
      <div className="w-1/2 h-full flex gap-x-14">
        <ul className="flex flex-col gap-y-1">
          <li className="font-semibold mb-1">Property</li>
          <li>House</li>
          <li>Apartment</li>
          <li>Villa</li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <li className="font-semibold mb-1">Article</li>
          <li>New Article</li>
          <li>Popular Artile</li>
          <li>Most Read</li>
          <li>Tips & Tricks</li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <li className="font-semibold mb-1">Contact</li>
          <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
          <li>(671) 555-0110</li>
          <li>info@hounter.com</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
