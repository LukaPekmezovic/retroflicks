import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


function Home() {
  const { data: movies = [] } = useMovieList();


  return (
      <>
        <Navbar />
        <Billboard />
        <div className="pb-40">
          <MovieList title="Tranding Now" data={movies} />
        </div>
      </>
  );
}

export default Home;