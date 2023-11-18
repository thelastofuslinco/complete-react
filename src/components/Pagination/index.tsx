import {
  faChevronRight,
  faChevronLeft,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.scss'

interface Props {
  pages: number
  page: number
  onClick: (value: number) => void
}

const Pagination = ({ pages, page, onClick }: Props) => {
  const totalPages = Array.from({ length: pages }, (_, i) => {
    const index = i + 1

    const pageBefore = index === page - 1
    const actualPage = index === page
    const nextPage = index === page + 1

    let firstPages
    let lastPages

    if (page + 1 >= pages) {
      firstPages = index < 4
    } else if (page + 2 === pages) {
      firstPages = index < 3
    } else if (page <= 4) {
      firstPages = index < 6
    } else {
      firstPages = index < 2
    }

    if (page === pages) {
      lastPages = index > pages - 3
    } else if (pages - 1 === page + 2) {
      lastPages = index > pages - 2
    } else {
      lastPages = index > pages - 1
    }

    const condition =
      pageBefore || nextPage || actualPage || firstPages || lastPages

    if (condition) {
      return index
    }
  })
    .reduce((prev, curr) => {
      if (
        prev[prev.length - 1] !== undefined &&
        curr === undefined &&
        prev[prev.length - 1] !== 'dot'
      ) {
        return [...prev, 'dot']
      } else {
        return [...prev, curr]
      }
    }, [])
    .filter((value) => value !== undefined)

  return (
    <div className="paginationContainer">
      <button
        disabled={page <= 1}
        className="paginationIcon"
        onClick={() => onClick(page - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {totalPages.map((value, index) => {
        if (typeof value === 'number') {
          return (
            <button
              onClick={() => onClick(value)}
              key={value}
              className={`paginationPage ${value === page && 'active'}`}
            >
              {value}
            </button>
          )
        } else {
          return (
            <span key={value + index} className="paginationIcon">
              <FontAwesomeIcon key={value} icon={faEllipsis} />
            </span>
          )
        }
      })}

      <button
        disabled={page === pages}
        className="paginationIcon"
        onClick={() => onClick(page + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

export default Pagination
