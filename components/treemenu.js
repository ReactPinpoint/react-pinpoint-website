const Change = ({ changeIndex, setChangeIndex }) => {
  return(
    <div className="flex flex-col w-24 items-center">
      <button className="my-2 p-2 border" onClick={() => setChangeIndex(changeIndex)}>Change {changeIndex}</button>
    </div>
  )
}

export default function TreeMenu({ changes, setChangeIndex }) {
  const changeList = changes.map((change, i) => <Change key={`Change ${i}`} changeIndex={i} setChangeIndex={setChangeIndex} />);
  return(
    <div className="border-r bg-gray-100">
      <h3>Changes</h3>
      {changeList}
    </div>
  )
}
