function Card_porject(props) {
  return (
    <div
      className=" 
glass-container h-fit shadow-2xl px-5 py-5 rounded-md"
    >
      <div className="w-[200px] h-[120px]  bg-acitive">
        <img src={props.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-2">
          {props.title}
        </h5>
        <div className="w-[200px] ">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card_porject;
