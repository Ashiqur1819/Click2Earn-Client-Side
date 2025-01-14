

const WorkerHome = () => {
    return (
      <div className="p-6 w-11/12 mx-auto mt-12 bg-white">
        <div className="flex items-center gap-6">
          <div className="bg-blue-200 p-6 text-center rounded-sm min-w-52">
            <h3 className="text-lg font-semibold">Total Submission</h3>
            <h2 className="text-5xl text-pink-500 font-bold">15</h2>
          </div>
          <div className="bg-red-200 p-6 text-center rounded-sm min-w-52">
            <h3 className="text-lg font-semibold">Total Submission</h3>
            <h2 className="text-5xl text-pink-500 font-bold">15</h2>
          </div>
          <div className="bg-green-200 p-6 text-center rounded-sm min-w-52">
            <h3 className="text-lg font-semibold">Total Submission</h3>
            <h2 className="text-5xl text-pink-500 font-bold">15</h2>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Approved Submission
          </h2>
          <div className="overflow-x-auto mt-6">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default WorkerHome;