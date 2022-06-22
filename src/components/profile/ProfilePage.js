import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import MenuList from "../../common/MenuList";
import defaultProtoPic from "../../assets/img/defaultProtoPic.png";

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
        <div className="grid grid-cols-5 ">
          <div className="bg-gray-100 px-6 py-10 rounded-3xl ">
            <div className="">
              <div className="mt-1  items-center">
                <img
                  src={defaultProtoPic}
                  className="rounded-full text-gray-700"
                />
                <p>Edit profile</p>
              </div>
            </div>
            <h4>John Doe</h4>
            <div className="space-y-4">
              <MenuList title="option 1" to="/" />
              <MenuList title="option 1" to="/" />
              <MenuList title="option 1" to="/" />
              <MenuList title="option 1" to="/" />
            </div>
          </div>
          <div className="bg-orange-900 col-span-4 ">
            <h1>gggg</h1>
          </div>
        </div>
      </div>
    </>
  );
}
