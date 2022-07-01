import signature from '../../assets/img/signature.png';
import cat from '.././../assets/img/cat1.png';

export default function ReviewCard() {
  return (
    <div className="card w-80 inline-block">
      <figure>
        <img src={cat} alt="cat" className="rounded-xl" />
      </figure>
      <div className="card-body p-0 py-5">
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
