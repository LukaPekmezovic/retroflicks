import { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vh]">
      <img
        className="
                cursor-pointer 
                object-cover 
                transition 
                duration 
                shadow-xl 
                rounded-md 
                group-hover:opacity-90 
                sm:group-hover:opacity-0 
                delay-300 
                w-full 
                h-[vh]"
        src={data?.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vh] group-hover:translate-x-[2vh] group-hover:opacity-100">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vh]"
          src={data?.thumbnailUrl}
          alt="Thumbnail"
        />
        <div
          className="
                        z-10 
                        bg-zinc-800 
                        p-2 lg:p-4 
                        absolute w-full 
                        transition 
                        shaodw-md 
                        rounded-b-md"
        >
          <div className="flex flex-row items-center gap-3">
            <div
              className="
                                cursor-pointer 
                                w-6 
                                h-6 
                                lg:w-10 
                                lg:h-10 
                                bg-white 
                                rounded-full 
                                flex 
                                justify-center 
                                transition 
                                hover:bg-neutral-300"
              onClick={() => router.push(`/watch/${data?.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data?.movieId} />
          </div>

          <p className="text-purple-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>

          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              {data?.duration}
            </p>
          </div>

          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data?.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
