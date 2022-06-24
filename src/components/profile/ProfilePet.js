import { Link } from "react-router-dom";
import PetInformation from "./PetInformation";

export default function ProfilePet() {
  return (
    <div className=" col-span-8">
      <div className="flex justify-between items-center ">
        <h4 className="text-2xl font-medium">Pet Information</h4>
        <div className="flex gap-4">
          <button className="btn-text">Delete</button>
          <button className="btn-text">Cancel</button>
          <button className="btn-small ">Save</button>
        </div>
      </div>
      <div className="border-b-2">
        <PetInformation />
      </div>
    </div>
  );
}
