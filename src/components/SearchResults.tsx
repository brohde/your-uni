import { useState, useEffect } from 'react'
import styles from '@/styles/Search.module.css'
import { UniData } from '@/types'
import Image from 'next/image'

/**
 * Logic to filter data by query string.
 * 
 * @param {UniData[]} data
 * @param {string} query string Search text
 * @return UniData[]
 */
const SearchUniData = (data: UniData[], query: string) => {
  const filtered = data.filter(uniData => {
    for (const prop in uniData) {
      if (uniData[prop].toString().toLowerCase().includes(query.toLowerCase())) {
        return true
      }
    }
    return false
  })

  // Sort alphabetically by name
  return filtered.sort((a, b) => a.INSTNM.localeCompare(b.INSTNM))
}

const SearchResults = ({ data, filterText = '' }: { data: UniData[], filterText?: string }) => {
  const filteredData = SearchUniData(data, filterText)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [filterText])
  
  return (
    <>
      <div className={styles.pagination}>

        {filteredData.length === 0 &&
          <p className={styles.overview}>There are no results.</p>
        }
  
        {filteredData.length > 0 &&
          <p className={styles.overview}>Showing {indexOfFirstItem+1} to {filteredData.length < indexOfLastItem ? filteredData.length : indexOfLastItem } of {filteredData.length} universities.</p>
        }

        <div className={styles.buttons}>
          <button
            onClick={() => setCurrentPage(currentPage => (currentPage > 1 ? currentPage - 1 : currentPage))}
            disabled={currentPage === 1}
            className={styles.arrow}
          >
            <Image role="presentation" src="arrow-left.svg" className={styles.arrowLeft} alt="Left arrow" width="10" height="10" />
            <span>Previous page</span> 
          </button>

          <button
            onClick={() => setCurrentPage(currentPage => currentPage < totalPages ? currentPage + 1 : currentPage)}
            disabled={currentPage === totalPages || filteredData.length === 0}
          >
            <span>Next page</span>
            <Image role="presentation" src="arrow-left.svg" className={styles.arrowRight} alt="Right arrow" width="10" height="10" />
          </button>
        </div>
      </div>
      <div className={styles.searchResults}>
      {currentItems.map(uniData => (
        <div key={uniData.UNITID} className={styles.item}>
          <div className={styles.card}>
            <p>{uniData.CITY} • {uniData.STABBR}</p>
            <p className={styles.title}>{uniData.INSTNM}</p>
            <p><a className={styles.link} href={`https://${uniData.INSTURL}`}>{uniData.INSTURL}</a></p>
          </div>
        </div>
      ))}
    </div>
    </>

  )
}

export default SearchResults