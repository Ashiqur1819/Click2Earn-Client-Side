import { useQuery } from "@tanstack/react-query";
import WorkerSubmissionsRow from "../../../../components/WorkerSubmissionRow/WorkerSubmissionsRow";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Paginations.css"

const WorkerSubmissions = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
    const itemsPerPage = 5;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

  // Fetch submissions using react-query
  const { data: submissions = [] } = useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/submittedTasks/${user?.email}`);
      return res.data;
    },
  });


  // Update pagination on data fetch
  useEffect(() => {
    setPageCount(Math.ceil(submissions.length / itemsPerPage));
    setCurrentItems(submissions.slice(0, itemsPerPage));
  }, [submissions]);

  // Handle page change
  const handlePageClick = (event) => {
      const selectedPage = event.selected;
      setCurrentPage(selectedPage);
    const newOffset = event.selected * itemsPerPage;
    setCurrentItems(submissions.slice(newOffset, newOffset + itemsPerPage));
  };

  return (
    <div className="mt-12 p-6 w-11/12 mx-auto bg-white">
      <h2 className="text-2xl md:text-3xl font-bold">My Submissions</h2>
      <div className="overflow-x-auto mt-6">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="text-base font-medium text-blue-950">Title</th>
              <th className="text-base font-medium text-blue-950">
                Buyer Email
              </th>
              <th className="text-base font-medium text-blue-950">Amount</th>
              <th className="text-base font-medium text-blue-950">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((submission, index) => (
              <WorkerSubmissionsRow
                submission={submission}
                index={currentPage * itemsPerPage + index}
                key={index}
              />
            ))}
          </tbody>
        </table>
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< Previous"
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="previous"
            nextClassName="next"
            activeClassName="active"
            disabledClassName="disabled"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkerSubmissions;
