import Link from "next/link";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen p-4 bg-gray-50">
        {/* HEADER - Rouge */}
        <div className="border-2 border-red-500 bg-red-100 p-4 mb-4 rounded flex ">
          <div className="text-xs text-red-800 font-bold mb-2">HEADER</div>
          <button className="btn btn-square justify-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
             
            </svg>
          </button>
       
          <div className="h-10"></div>
        </div>

        {/* LAYOUT PRINCIPAL */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* SIDEBAR - Vert */}
          <div className="border-2 border-green-500 bg-green-100 p-4 rounded ">
            <div className="text-xs text-green-900 font-bold ">SIDEBAR</div>
            <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
                >
                  Open drawer
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content  w-80 p-4">
                  {/* Sidebar content here */}

                  <li>
                    <Link href="/library">bibliothèque</Link>
                  </li>
                  <li>
                    <Link href="/rapport">rapport</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-40"></div>
          </div>

          {/* CONTENU PRINCIPAL - Bleu */}
          <div className="border-2 border-blue-500 bg-blue-100 p-4 rounded md:w-3/4">
            {children}
          </div>
        </div>

        {/* FOOTER - Gris */}
        <div className="border-2 border-gray-500 bg-gray-100 p-4 rounded">
          <div className="text-xs text-gray-800 font-bold mb-2">FOOTER</div>
          <div className="h-10"></div>
        </div>
      </div>
    </>
  );
}
