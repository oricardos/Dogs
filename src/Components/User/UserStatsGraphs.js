import React from "react";
import styles from "./UserStatsGraphs.module.css";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  console.log(
    
  );

  React.useEffect(() => {
    // setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b))
  }, []);

  return (
    <section className={`${styles.graphs} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos:{total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;