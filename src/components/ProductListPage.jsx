import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import pagination from "../assets/styles/pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { paginationActions } from "../store/paginationSlicer";

function ProductListPage() {
  const { currentPage, postsPerPage } = useSelector(
    (store) => store.pagination
  );
  const { productList } = useSelector((store) => store.productList);
  const dispatch = useDispatch();
  const totalPosts = productList.length;
  console.log(totalPosts); // check total
  // const pageNumbers = [];

  // create list of page
  const newPageNumbers = useMemo(() => {
    const numbers = [];
    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }, [totalPosts, postsPerPage]);

  useEffect(() => {
    dispatch(paginationActions.setPageNumbers(newPageNumbers));
  }, [newPageNumbers, dispatch]);

  const handleChange = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    switch (event.target.value) {
      case "12":
        dispatch(paginationActions.changePostsPerPage(event.target.value));
        break;
      case "24":
        dispatch(paginationActions.changePostsPerPage(event.target.value));
        break;
      case "36":
        dispatch(paginationActions.changePostsPerPage(event.target.value));
        break;
      default:
        break;
    }
  };
  return (
    <div className="product-list-page">
      <ul className="pagination">
        <li
          className="page-item"
          onClick={() => {
            dispatch(paginationActions.changeToPrePage(currentPage));
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </li>
        {newPageNumbers.map((number) => {
          return (
            <li
              key={number}
              className="page-item"
              onClick={() => {
                dispatch(paginationActions.changeCurrentPage(number));
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              {number}{" "}
            </li>
          );
        })}
        <li
          className="page-item"
          onClick={() => {
            dispatch(paginationActions.changeToNextPage());
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </li>
      </ul>

      <div className="select-products-per-page">
        <label htmlFor="item-per-page" className="label form-label">
          Items/Page
        </label>
        <select
          name="item-per-page"
          id="item-per-page"
          className="item-per-page"
          onChange={handleChange}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
      </div>
    </div>
  );
}

export default ProductListPage;
