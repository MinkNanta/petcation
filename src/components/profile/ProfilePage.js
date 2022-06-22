import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function ProfilePage() {
  return (
    <>
      <div className="">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"#"}>Home</Link>
            </li>
            <li>
              <Link to={"#"}>my count</Link>
            </li>
          </ul>
        </div>
        <h1>John Doe</h1>
      </div>
      <div className="">
        <div className="bg-stone-200">
          <div className="grid grid-rows-3 grid-flow-col gap-10">
            <div className="row-span-3 ">
              <ul class="menu menu-compact w-56">
                <li>
                  <li>
                    <div>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-50 w-50 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </li>
                  <Link to={""}>
                    Item 1 <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                  <Link to={""}>
                    Item 2 <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                  <Link to={""}>
                    Item 3 <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                  <Link to={""}>
                    Item 4 <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                  <Link to={""}>
                    Item 5 <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="row-span bg-black">
              <div className=" col">
                <input></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
