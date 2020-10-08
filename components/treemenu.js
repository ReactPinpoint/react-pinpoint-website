/* eslint-disable react/no-array-index-key */
const Change = ({ changeIndex, setChangeIndex, buttonIndex }) => (
  <div className="flex flex-col items-center w-auto ">
    <button
      type="button"
      className={
        buttonIndex === changeIndex
          ? 'px-2 py-1 mx-4 my-2 text-xs font-medium leading-5 bg-indigo-700 border border-b-4 rounded-md shadow outline-none focus:outline-none focus:shadow-xl text-white focus:border-indigo-800 hover:bg-neutral-100 focus:bg-indigo-700 focus:text-white'
          : 'px-2 py-1 mx-4 my-2 text-xs font-medium leading-5 bg-white border border-b-4 rounded-md shadow outline-none focus:outline-none focus:shadow-xl text-neutral-1000 focus:border-indigo-800 hover:bg-neutral-100 focus:bg-indigo-700 focus:text-white'
      }
      onClick={() => setChangeIndex(buttonIndex)}
    >
      Change {buttonIndex}
    </button>
  </div>
);
export default function TreeMenu({ changes, setChangeIndex, changeIndex }) {
  const changeList = changes.map((change, i) => <Change key={`Change ${i}`} buttonIndex={i} setChangeIndex={setChangeIndex} changeIndex={changeIndex} />);
  return <div className="border-r-4 border-neutral-700 bg-neutral-300">{changeList}</div>;
}
