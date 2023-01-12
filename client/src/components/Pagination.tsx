import React from 'react';
import '../css/pagination.css'

interface configPages {
  allProducts: number,
  productsPage: number,
  setPagination: any,
  actualPage: number,
}

export const Pagination = ({allProducts, productsPage, setPagination, actualPage}:configPages) => {

    const numberPage = [];

    for(let i = 1; i <= Math.ceil(allProducts/productsPage); i++){
        numberPage.push(i)
    }
  return (
    <nav>
        <div className="grid-container">
            {allProducts > 10 ? (
          <div> {setPagination(1)} </div>
        ) : (
          numberPage &&
          numberPage.map((n) => (
            <button
              onClick={() => setPagination(n)}
              className={
                actualPage === n ? "active items letters" : "items letters"
              }>
              {n}
            </button>
          ))
        )}
        </div>
    </nav>
  )
}
