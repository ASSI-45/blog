
type CardProps = {
  title: string
  disc: string
}

export default function Card(props: CardProps) {
  return(
    <>
      <div className="m-2 border-b-6 rounded-3xl border-zinc-900 hover:border-purple-950 shadow-xl/30">
        <div className="p-5 px-7 rounded-2xl border-solid border-6 border-zinc-700 hover:border-purple-700 bg-zinc-900 text-white font-inter">
          <img src="../assets/images/raspberry-pi-5.avif" alt="" />
          <h1 className="text-3xl">{ props.title }</h1>
          <p>{ props.disc }</p>
        </div>
      </div>
    </>
  );
}
