import { useState, useEffect } from 'react';

export default function usePaginate(array, itemsPerPage) {
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const pageCount = Math.ceil(array.length / itemsPerPage);
    const paginated = [];
    for (let i = 0; i < pageCount; i++) {
      const start = itemsPerPage * i;
      paginated.push(array.slice(start, start + itemsPerPage));
    }

    setPaginatedData(paginated);
  }, [array, itemsPerPage]);

  return paginatedData;
}
