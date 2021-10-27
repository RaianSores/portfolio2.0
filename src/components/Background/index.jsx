import React, { useCallback, useEffect, useState } from "react";
import { efeito } from "./action";
import styles from "./styles.module.scss";

export const Background = () => {
  const [efeit, setEfeito] = useState();

  const handleEfeito = useCallback(async () => {
    const EfeitoTela = await efeito();
    setEfeito(EfeitoTela);
  });

  useEffect(() => {
      handleEfeito(0, efeit)
  },[efeit, handleEfeito])

  return (
    <div id="largeHeader" className={styles.largeHeader}>
      <canvas id="demo-canvas"></canvas>
      <h1 className="mainTitle">
        Connect <span className="thin">Three</span>
      </h1>
    </div>
  );
};
