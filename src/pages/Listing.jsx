import LeafletMap from "../components/LeafletMap";

function Listing() {
  return (
    <main className="h-11/12 w-full flex overflow-hidden justify-center">
      <div className="h-screen text-white text-lg flex items-center justify-center bg-purple-800 basis-1/4 p-20">
        All details of the clicked listing will be shown here(yet to
        implemented)
      </div>
      <LeafletMap />
    </main>
  );
}

export default Listing;
