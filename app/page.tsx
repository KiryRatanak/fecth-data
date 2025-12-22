export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h3 className="text-8xl font-bold text-green-500 text-shadow-[5px_5px_7px_rgba(0,0,0,0.5)]">Dashboard</h3>
        <a href="/dashboard" type="button" className="group transition-transform hover:-translate-y-1 cursor-pointer text-3xl bg-green-500 hover:bg-green-400 active:scale-110 duration-300 py-4 px-10 mt-4 transition rounded-2xl text-white font-bold shadow-lg hover:shadow-xl shadow-gray-500 ">Click Here</a>
      </div>
    </>
  );
}