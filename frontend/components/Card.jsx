export default function Card({ event_name, looking_for, event_link, eventLoc, event_description }) {
  return (
    <div className="rounded-md border-2 border-solid border-blue-950 bg-black p-8 px-12 text-cyan-200 w-3/4 mx-auto hover:border-blue-900 my-2">
      <div className="flex justify-between">
        <div className="font-sans">
          <p className="text-2xl">{event_name}</p>
          <p className="text-xl">{looking_for}</p>
        </div>
        <div>
          <a href={event_link}>{event_link}</a>
          <p>{"eventLoc"}</p>
        </div>
      </div>
      <div className="border-2 border-green-950 rounded font-mono p-4 my-4 text-lg">
        {event_description}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptatem obcaecati perspiciatis reprehenderit tempora cumque? Vitae culpa reprehenderit ducimus officia ex reiciendis id, velit eligendi aliquam nemo quos consequatur natus!
      </div>
    </div>
  )
}