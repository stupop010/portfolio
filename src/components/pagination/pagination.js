import React from "react"
import { Link } from "gatsby"

const Pagination = ({ paginationData }) => {
  const { currentPage, numBlogPages } = paginationData
  const isFirst = currentPage === 1
  const isLast = currentPage === numBlogPages
  const prevPage =
    currentPage - 1 === 1 ? "/blogs" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <div className="pagination">
      {!isFirst && (
        <Link
          to={prevPage}
          rel="prev"
          className={isFirst ? "pagination-item disable" : "pagination-item"}
        >
          ←
        </Link>
      )}

      {Array.from({ length: numBlogPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/blogs/${i === 0 ? "" : i + 1}`}
          className={
            currentPage === i + 1 ? "pagination-item active" : "pagination-item"
          }
        >
          {i + 1}
        </Link>
      ))}

      {!isLast && (
        <Link
          to={nextPage}
          rel="next"
          className={isLast ? "pagination-item disable" : "pagination-item"}
        >
          →
        </Link>
      )}
    </div>
  )
}

export default Pagination
