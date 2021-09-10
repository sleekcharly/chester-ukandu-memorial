import React from "react";

function NavLinks() {
  return (
    <nav className="flex items-center justify-between md:space-x-8 md:justify-start md:pl-8 border-b border-gray-800 border-opacity-20 pb-4">
      <a href="/" className="nav-link group">
        <span className="span">About</span>
      </a>

      <a href="/events#events_section" className="nav-link group">
        <span className="span">Events</span>
      </a>

      <a href="/memories#messages" className="nav-link group">
        <span className="span">Memories</span>
      </a>
    </nav>
  );
}

export default NavLinks;
