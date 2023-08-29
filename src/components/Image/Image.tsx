interface PropTypes {
  image: string
}
export const Image = ({ image }: PropTypes) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original${image}`}
      className="rounded-md"
    />
  )
}
