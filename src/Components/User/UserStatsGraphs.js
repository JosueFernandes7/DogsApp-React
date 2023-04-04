import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie } from "victory";

const UserStatsGraphs = ({ data }) => {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        const graphData = data.map((image, index) => {
            return {
                x: index,
                y: image.acessos,
                label: image.title
            }
        })
        console.log(graphData);
        setTotal(
            data
                .map(({ acessos }) => Number(acessos))
                .reduce((acc, e) => acc + e, 0)
        );
        setGraph(graphData);
    }, [data]);
    return (
        <section className={`animeLeft ${styles.graph}`}>
            <div className={`${styles.total} ${styles.graphContainer}`}>
                <p>Acessos: {total}</p>
            </div>
            <div className={styles.graphContainer}>
                <div className={styles.graphItem}>
                    <VictoryPie 
                        data={graph}
                        innerRadius={100}
                    />

                </div>
            </div>
        </section>
    );
};

export default UserStatsGraphs;
