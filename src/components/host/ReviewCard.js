import signature from '../../assets/img/signature.png';
import cat from '.././../assets/img/cat1.png';

export default function ReviewCard({ img, desc, sig, title }) {
  return (
    <div className="card w-80 inline-block">
      <figure>
        <img src={img ? img : cat} alt="cat" className="rounded-xl" />
      </figure>
      <div className="card-body p-0 py-5">
        <p className="text-base text-gray-500">{desc}</p>
        <div className="h-15 w-auto">
          <img src={sig ? sig : signature}></img>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
