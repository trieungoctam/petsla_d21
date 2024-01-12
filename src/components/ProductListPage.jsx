import React from "react";
import { useDispatch, useSelector } from "react-redux";
import pagination from "../assets/styles/pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function ProductListPage() {
  const { currentPage, postsPerPage } = useSelector(
    (store) => store.pagination
  );
  const { productList } = useSelector((store) => store.productList);
  const dispatch = useDispatch();
  const totalPosts = productList.length;
  console.log(totalPosts); // check total
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  } // create list of page

  // console.log(pageNumbers);
  return (
    <div className="product-list-page">
      <ul className="pagination">
        <li className="page-item">
          <FontAwesomeIcon icon={faAngleLeft} />
        </li>
        {pageNumbers.map((number) => {
          return <li className="page-item">{number + 1}</li>;
        })}
        <li className="page-item">
          <FontAwesomeIcon icon = {faAngleRight}/>
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
