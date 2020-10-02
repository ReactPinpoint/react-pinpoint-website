export default function Button({ children }) {
  return (
    <button className="px-4 py-2 tracking-wider bg-teal-500 rounded-full shadow-lg focus:outline-none hover:bg-teal-400 text-neutral-100">
      {children}
    </button>
  );
}
