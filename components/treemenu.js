/* eslint-disable react/no-array-index-key */
const Change = ({ changeIndex, setChangeIndex, buttonId }) => (
  <div className="flex flex-col items-center w-auto ">
    <button
      type="button"
      className={
        buttonId === changeIndex
          ? 'px-2 py-1 mx-4 my-2 text-xs font-medium leading-5 bg-indigo-700 border-indigo-800 border border-b-4 rounded-md  focus:outline-none  shadow-xl text-white'
          : 'px-2 py-1 mx-4 my-2 text-xs font-medium leading-5 bg-white border border-b-4 rounded-md shadow outline-none text-neutral-1000 focus:outline-none  hover:bg-neutral-100'
      }
      onClick={() => setChangeIndex(buttonId)}
    >
      Change {buttonId}
    </button>
  </div>
);
export default function TreeMenu({ changes, setChangeIndex, changeIndex }) {
  const changeList = changes.map((change, i) => (
    <Change key={`Change ${i}`} buttonId={i} setChangeIndex={setChangeIndex} changeIndex={changeIndex} />
  ));
  return <div className="border-r-4 border-neutral-700 bg-neutral-300">{changeList}</div>;
}
