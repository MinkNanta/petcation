import signature from "../../assets/img/signature.png";

export default function ReviewCard() {
  return (
    <div class="card w-80 inline-block">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=500"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body p-0 py-5">
        <p className="text-base text-gray-500">
          Hosting my home allowed me to become an entrepreneur and laid down a
          path to financial freedom.
        </p>
        <div className="h-10 w-auto">
          <img src={signature}></img>
        </div>
        <p>Dog Lover</p>
      </div>
    </div>
  );
}
