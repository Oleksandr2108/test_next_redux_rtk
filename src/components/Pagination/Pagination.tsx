import { setCurrentPage } from "@/store/slices/paginationSlice";
import { useDispatch } from "react-redux";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
}) => {
  const dispatch = useDispatch();
  return (
    <div className=" mt-20 flex gap-2 justify-center">
      <button
        onClick={() => dispatch(setCurrentPage(Math.max(currentPage - 1, 1)))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => dispatch(setCurrentPage(index + 1))}
          className={`px-4 py-2 ${
            currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() =>
          dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))
        }
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};
