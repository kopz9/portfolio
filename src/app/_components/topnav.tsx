export default function TopNav() {
  return (
    <nav className="bg-gray-600 text-white border-b">
      <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="ml-4 flex items-center gap-8 space-x-4  text-xl">
            <a
              href="/"
              className="rounded-lg p-2 font-semibold uppercase hover:bg-white hover:text-black"
            >
              Home
            </a>
            <a
              href="/"
              className="rounded-lg p-2 font-semibold uppercase hover:bg-white hover:text-black"
            >
              Projetos
            </a>
            <a
              href="/"
              className="rounded-lg p-2 font-semibold uppercase hover:bg-white hover:text-black"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
