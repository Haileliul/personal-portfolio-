function Card_porject(props) {
  return (
    <div className=" bg-white h-fit   hover:shadow-b-2xl px-5 py-3 rounded-md border-gray-200 hover:border-2">
      <div className="w-[200px] h-[170px]   ">
        <img src={props.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <h5 className="text-lg font-bold tracking-tight text-gray-700 dark:text-white py-1">
          {props.title}
        </h5>
        <div className="w-[200px]  ">
          <p className="font-normal text-gray-500 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card_porject;
