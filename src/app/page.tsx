"use client";

import styles from './page.module.css'

import { Loader } from "@googlemaps/js-api-loader"
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "",
      version: "weekly",
    });

    loader.load().then(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = { lat: position.coords.latitude, lng: position.coords.longitude }

        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: latlng,
          zoom: 16,
        });
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
      <div id="map" style={{width: "100%", minHeight: "600px"}}></div>
      <div id="address_form">
        Address: <input type="text" />
      </div>
    </main>
  )
}
