import Menu from "./SideBar/menu";

export default function Sider() {
  return (
    <aside className="w-60 py-4 flex flex-shrink-0 flex-col bg-black">
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="mr-1 mb-8 bg-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <img
            src="Logo.png"
            alt="Logo"
            className="w-8 rounded-full px-1 py-1 bg-white border-2 border-black"
          />
        </a>
        <h1 className="text-2xl font-bold text-center items-center mb-8">
          MonkeyMusic<sup className="text-lg">&reg;</sup>
        </h1>
      </div>
      <Menu />
    </aside>
  );
}
