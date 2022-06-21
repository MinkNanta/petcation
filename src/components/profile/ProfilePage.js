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
          <div className="grid grid-rows-3 grid-flow-col gap--2">
            <div className="row-span-3 ">
              <ul class="menu menu-compact w-56">
                <li>
                  <li>
                    <a>Item 1</a>
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
            <div className="col-span-2"></div>
            <div className="row-span-2 col-span-2">03</div>
          </div>
        </div>
      </div>
    </>
  );
}
