export default function AddCustomCategory() {
  return (
    <div className="w-[40%] flex flex-col items-center">
      <h2>Add Custom Category</h2>
      <div className="flex flex-col w-[90%]">
        <label for="Name"> Name </label>
        <input type="text" id="Name" className="rounded-[5px] border-2 " />
      </div>
      <div className="flex flex-col mb-3 w-[90%]">
        <label for="Icon"> Icon </label>
        <input type="text" id="Icon" className="rounded-[5px] border-2" />
      </div>
      <div className="flex w-full justify-evenly">
        <button className="bg-white outline-none text-black border-black border-[1px] font-semibold w-[30%] rounded-lg text-md">
          Cancel
        </button>
        <button className="bg-[#101010] outline-none text-white font-semibold py-2 w-[30%] rounded-lg text-md">
          Add
        </button>
      </div>
    </div>
  );
}
