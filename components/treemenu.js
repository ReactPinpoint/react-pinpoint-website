const Change = ({ changeIndex, setChangeIndex }) => {
  return (
    <div className="flex flex-col items-center w-auto ">
      <button
        className="relative inline-flex items-center w-auto px-2 py-1 mx-4 my-2 text-sm font-medium leading-5 bg-white border border-transparent rounded-md outline-none text-neutral-1000 border-neutral-300 hover:bg-neutral-100 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 focus:bg-indigo-700 focus:text-white active:bg-indigo-700"
        onClick={() => setChangeIndex(changeIndex)}
      >
        Change {changeIndex}
      </button>
    </div>
  );
};

export default function TreeMenu({ changes, setChangeIndex }) {
  const changeList = changes.map((change, i) => <Change key={`Change ${i}`} changeIndex={i} setChangeIndex={setChangeIndex} />);
  return <div className="bg-gray-100 border-r">{changeList}</div>;
}
