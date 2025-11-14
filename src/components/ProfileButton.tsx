import { useState, useRef, useEffect } from "react";

interface ProfileButtonProps {
  img?: string;
}

export default function ProfileMenu({ img }: ProfileButtonProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* BUTTON */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-primary bg-cover bg-center hover:shadow-lg rounded-full w-10 h-10 text-neutral-50 hover:scale-105 transition-transform duration-200"
        style={{
          backgroundImage: img ? `url(${img})` : undefined,
        }}
      >
        {!img && "P"}
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="right-0 z-50 absolute bg-bg shadow-lg mt-2 py-2 border border-border rounded-lg w-40 animate-fadeIn"
        >
          <button className="hover:bg-gray-100 px-4 py-2 w-full text-text text-left">
            My Profile
          </button>
          <button className="hover:bg-gray-100 px-4 py-2 w-full font-semibold text-danger text-left">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
