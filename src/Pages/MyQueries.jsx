import { Link } from "react-router-dom";
import MyQueriesCard from "../Components/MyQueriesCard";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { AuthContext } from "../AuthPovider/AuthPovider";
import useAxios from "../Hooks/useAxios";
import Loader from "../Components/Loader";

const MyQueries = () => {
  const axiosSecurity = useAxios();
  const { user } = useContext(AuthContext);
  const [myQueries, setMyQueries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchdata();
  }, [user?.email]);

  const fetchdata = async () => {
    setLoading(true);
    try {
      const { data } = await axiosSecurity.get(`/all-queries/${user?.email}`);
      setMyQueries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Loading State */}
      {loading && (
        <div className="text-center my-10 col-span-3">
          <Loader />
        </div>
      )}

      {/* Stylish Banner */}
      <div className="relative hero bg-gradient-to-r from-primary via-light to-secondary">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/bswcJdc/110030.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark opacity-60"></div>

        <div className="relative z-10 hero-content text-center text-dark py-10 md:py-20 px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-wide leading-tight">
              My Queries
            </h1>
            <p className="mb-5 text-base  md:text-lg font-semibold text-dark/80">
              See your queries here and add new ones. You can also edit or delete your queries.
            </p>
            <Link to={"/addQueries"}>
              <button className="mt-5 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                ADD QUERY
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Space Between Banner and Content */}
      <div className="mt-8"></div>

      {/* Queries Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 w-11/12 mx-auto">
        {/* No Queries State */}
        {myQueries.length === 0 && (
          <div className="text-center my-10 col-span-3">
            <img
              src="https://i.ibb.co/4NLYhXB/a-3d-render-of-a-banner-with-the-text-no-Il67-Fv8-SLa-Im-Ecplq-DUQ-f-DCBDB3a-RVaa4-Bj-P90s-MVA.jpg"
              alt="No Queries"
            />
          </div>
        )}

        {/* Queries List */}
        {myQueries.map((query) => (
          <MyQueriesCard
            key={query._id}
            myQueries={myQueries}
            setMyQueries={setMyQueries}
            query={query}
          />
        ))}
      </div>
    </div>
  );
};

export default MyQueries;
