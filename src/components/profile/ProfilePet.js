import { Link } from "react-router-dom";

export default function ProfilePet() {
  return (
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
  );
}
