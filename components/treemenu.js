const Change = ({ changeIndex, setChangeIndex }) => {
  return (
    <div className="flex flex-col items-center w-auto ">
      <button
        className="px-2 py-1 mx-4 my-2 text-xs font-medium leading-5 bg-white border border-b-4 rounded-md shadow outline-none focus:outline-none focus:shadow-xl text-neutral-1000 focus:border-indigo-800 hover:bg-neutral-100 focus:bg-indigo-700 focus:text-white "
        onClick={() => setChangeIndex(changeIndex)}
      >
        Change {changeIndex}
      </button>
    </div>
  );
};

export default function TreeMenu({ changes, setChangeIndex }) {
  const changeList = changes.map((change, i) => <Change key={`Change ${i}`} changeIndex={i} setChangeIndex={setChangeIndex} />);
  return <div className="border-r-4 border-neutral-700 bg-neutral-300">{changeList}</div>;
}
