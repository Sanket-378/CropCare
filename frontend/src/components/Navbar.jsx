function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-green-600 font-bold text-xl">
        🌱 Crop Care
      </h1>

      {/* Menu */}
      <div className="space-x-8 text-gray-700 font-medium">
        <a href="#" className="text-green-600">Home</a>
        <a href="#" className="hover:text-green-600">About</a>
        <a href="#" className="hover:text-green-600">Contact</a>
        <a href="#" className="hover:text-green-600">Login/Register</a>
        <a href="#" className="hover:text-green-600">Profile</a>
      </div>

    </nav>
  );
}

export default Navbar;