"use client";

import styles from './page.module.css'

import { Loader } from "@googlemaps/js-api-loader"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
    </main>
  )
}
