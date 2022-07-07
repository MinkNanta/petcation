import signature from '../../assets/img/signature.png';
import cat from '.././../assets/img/cat1.png';

export default function ReviewCard({ img, desc, sig, title }) {
  return (
    <div className="card gap-9">
      <div className="w-full h-[420px] rounded-xl overflow-hidden">
        <img
          src={img ? img : cat}
          alt="cat"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="card-body p-0 py-5">
        <p className="text-base text-gray-500">{desc}</p>
        <div className="">
          <img src={sig ? sig : signature} alt="signature" />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
