export default function EditorPage() {
  return (
    <div className="flex flex-row text-center h-screen">
      <div className="basis-1/5 border-red-50 flex-col">
        <h3>menu de gauche</h3>

        <button className="swap-on btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
        😈 Responsive
        </button>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="basis-3/5 flex-col flex justify-around">
        <h2 className="text-center font-bold">La page Editor</h2>
        <div>Media</div>
        <div>
          <label className="swap swap-flip text-9xl">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
        </div>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="basis-1/5 flex-col">Param Question</div>
    </div>
  );
}
