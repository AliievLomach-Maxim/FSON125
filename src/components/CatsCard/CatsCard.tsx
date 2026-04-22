interface CatsCardProps {
  name: string
  age: number
  email: string
  image: string
}

const CatsCard = ({ name, age, email, image }: CatsCardProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <br />
      <p>{age}</p>
      <p>{email}</p>
      <img src={image} alt={name} width={50} height={50} />
    </div>
  )
}

export default CatsCard
