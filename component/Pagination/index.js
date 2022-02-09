import { useRouter } from "next/router";

const Pagination = ({ page, pageNumber, isBlog }) => {
  const router = useRouter();
  const hasNextPage = pageNumber > page;
  const hasPreviousPage = page > 1;
  const pageList = [];
  for (let i = 1; i <= pageNumber; i++) {
    pageList.push(i);
  }
  return (
    <>
      {hasPreviousPage ? (
        <a>
          <button
            className="buttonClass"
            onClick={() =>
              router.push(
                isBlog ? `/blog/page/${page - 1}` : `/page/${page - 1}`
              )
            }
          >
            prev
          </button>
        </a>
      ) : (
        <a>
          <button
            className=" buttonClass"
            disabled
            onClick={() =>
              router.push(
                isBlog ? `/blog/page/${page - 1}` : `/page/${page - 1}`
              )
            }
          >
            Prev
          </button>
        </a>
      )}
      <ul className={isBlog ? "flex items-center " : "hidden"}>
        {pageList.map((num) => (
          <li
            key={num}
            className={
              page == num
                ? "text-white  bg-primaryColor   pagination-list"
                : "  hover:bg-primaryColor hover:text-white pagination-list"
            }
            onClick={() => router.push(`/blog/page/${num}`)}
          >
            <a className="">{num}</a>
          </li>
        ))}
      </ul>
      {hasNextPage ? (
        <a>
          <button
            className=" buttonClass"
            onClick={() =>
              router.push(
                isBlog ? `/blog/page/${page + 1}` : `/page/${page + 1}`
              )
            }
          >
            Next
          </button>
        </a>
      ) : (
        <a>
          <button
            className=" buttonClass "
            disabled
            onClick={() =>
              router.push(
                isBlog ? `/blog/page/${page + 1}` : `/page/${page + 1}`
              )
            }
          >
            Next
          </button>
        </a>
      )}
    </>
  );
};

export default Pagination;
