import LoadingCell from "@/components/LoadingCell";
import NoticeCell from "@/components/NoticeCell";
import PersonCell from "@/components/PersonCell";
import { Character } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const getCharacters = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;

export default function CharactersList(): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const { loading, error, data, fetchMore } = useQuery(getCharacters, {
    variables: { page: 1 }, // Always start with the first page
  });

  useEffect(() => {
    if (data?.characters.results) {
      setCharacters((prev) => [...prev, ...data.characters.results]);
      setIsFetching(false);
    }
  }, [data]);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (
      scrollHeight - scrollTop <= clientHeight * 1.2 &&
      !loading &&
      !isFetching &&
      data?.characters.info.next
    ) {
      setIsFetching(true);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (currentPage > 1) {
      fetchMore({ variables: { page: currentPage } });
    }
  }, [currentPage, fetchMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, isFetching, data]);

  if (loading && currentPage === 1) return <LoadingCell />;
  if (error) return <NoticeCell />;

  return (
    <ul className="w-full h-full overflow-y-scroll">
      {characters.map((character: Character) => (
        <li
          key={character.id}
          className="flex w-full justify-between items-center border-b-gray-300 border-solid border-b-[1px]"
        >
          <PersonCell character={character} />
        </li>
      ))}
      {isFetching && <LoadingCell />}
    </ul>
  );
}
