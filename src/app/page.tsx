"use client";

import styles from './page.module.css'

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
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
