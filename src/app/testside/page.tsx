"use client";

const NavBar = () => {
  return (
    <nav className="grid grid-cols-2 grid-rows-1 bg-red-500 h-[50px]">
      <div>hello</div>
      <div>test</div>
    </nav>
  );
};

const SideNav = () => {
  return (
    <nav className="flex flex-col bg-emerald-400 h-full">
      <div className="bg-slate-400 flex-1">Aufträge</div>
      <div className="bg-fuchsia-400 h-10">Aufträge</div>
    </nav>
  );
};

const DashBoard = () => {
  return (
    <main className="flex bg-orange-400 p-8">
      <OrderContainer />
    </main>
  );
};

const OrderHeader = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr_2fr] gap-1 bg-amber-800 h-16">
      <div className="overflow-hidden bg-yellow-300">noo1</div>
      <div className="overflow-hidden bg-yellow-300">noo1</div>
      <div className="overflow-hidden bg-yellow-300">noo1</div>
      <div className="overflow-hidden bg-yellow-300">noo1</div>
      <div className="overflow-hidden bg-yellow-300">noo1</div>
      <div className="overflow-hidden bg-yellow-300">noo1</div>
      <div className="overflow-hidden bg-yellow-300">noo1</div>
      <div className="overflow-hidden bg-yellow-300">noo1</div>
    </div>
  );
};

const OrderContainer = () => {
  return (
    <div className="grid grid-cols-1 bg-fuchsia-400 rounded-lg border-4 w-full h-full">
      <OrderHeader />
      <div className="grid grid-cols-1 bg-red-400 overflow-auto"></div>
    </div>
  );
};

export default function Test() {
  return (
    <div className="fixed grid grid-rows-[50px_1fr] w-screen h-screen bg-slate-50">
      {/* NavBar bleibt oben fixiert */}
      <NavBar />

      {/* Hauptinhalt: SideNav + Dashboard */}
      <div className="grid grid-cols-[250px_1fr] h-full overflow-hidden">
        {/* Sidebar */}
        <SideNav />

        {/* Dashboard */}
        <DashBoard />
      </div>
    </div>
  );
}
