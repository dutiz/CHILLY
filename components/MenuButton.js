export default function MenuButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="uppercase bg-yellow-400 px-5 rounded-3xl py-5">
      {children}
    </button>
  )
}
