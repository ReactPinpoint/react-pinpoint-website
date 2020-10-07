const Change = ({ changeIndex, setChangeIndex }) => {
  return(
    <div className="flex flex-col items-center">
      <button onClick={() => setChangeIndex(changeIndex)}>Change {changeIndex}</button>
    </div>
  )
}

export default function TreeMenu({ changes, setChangeIndex }) {
  const changeList = changes.map((change, i) => <Change key={`Change ${i}`} changeIndex={i} setChangeIndex={setChangeIndex} />);
  return(
    <div>
      {changeList}
    </div>
  )
}
