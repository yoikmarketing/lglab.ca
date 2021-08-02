import styles from "@styles/heading.module.css"

export default function Heading({ title, lead }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title || "Take control of your team."}
        </h1>
        {lead ? (
          <p className={styles.lead}>
            {lead}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
