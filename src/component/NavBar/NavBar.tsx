function NavBar() {
  return (
<div className="sm:flex justify-between m-5">
      <h1>Ajay Muthukumaran</h1>

      <ul className="flex justify-center gap-2 absolute left-1/2 transform -translate-x-1/2">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Work</li>
        <li className="cursor-pointer">project</li>
      </ul>
    </div>
  );
}

export default NavBar;
