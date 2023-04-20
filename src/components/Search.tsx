import useSWR from 'swr'
import { useState } from 'react'
import { UniData } from '@/types'
import SearchResults from './SearchResults'
import styles from '@/styles/Search.module.css'

/**
 * Fetch the CSV file and parse it into UniData[].
 * @param url Path of CSV file
 * @returns Promise<UniData[]>
 */
const fetcher = async (url: string) => {
  return fetch(url)
    .then((res) => res.text())
    .then(csvText => {
      const rows = csvText.split('\n')
      const headers = rows[0].split(',')
      const parsedData = rows.slice(1).map(row => {
        const values = row.split(',')
        return headers.reduce((obj, header, index) => {
          obj[header] = values[index]
          return obj
        }, {} as UniData)
      })

      return parsedData
    })
}


const Search = () => {
  const { data , error, isLoading } = useSWR(
    "edu-scorecard.csv",
    fetcher
  )

  const [query, setQuery] = useState('')

  return (
    <>
      <form className={styles.search}>
        <input type="text" placeholder="Search..." className={styles.searchBox} onChange={(e) => setQuery(e.target.value)} />
      </form>
      {error && "An error has occurred."}
      {isLoading && "Loading..."}
      {data && <SearchResults data={data} filterText={query} />}
    </>
  )
}

export default Search