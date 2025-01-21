import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../components/ui/Map"), {
  ssr: false,
});
const Map1 = dynamic(() => import("./map1"), {
  ssr: false,
});
export default Map1;
// export default Map;
