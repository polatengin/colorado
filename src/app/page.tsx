import dynamic from 'next/dynamic';

const Maps = dynamic(() => import("../components/maps"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Maps />
      <div id="address_form">
        Address: <input type="text" />
      </div>
    </div>
  )
}
