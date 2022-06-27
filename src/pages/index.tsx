import React, { useRef, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import { Toaster } from "@blueprintjs/core";
import UnstyledBlockPicker from "../components/block-picker";
import UnstyledSite from "../components/site";

const AppContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const BlockPicker = styled(UnstyledBlockPicker)`
  width: 30%;
`;

const Site = styled(UnstyledSite)`
  flex: 1;
  z-index: 1;
`;

export default function Home(): JSX.Element {
  const [blockList, setBlockList] = useState(["header", "hero", "footer"]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const toasterRef = useRef(null);

  const addBlock = (blockName: string) => {
    if (activeIndex === -1) {
      toasterRef.current.show({
        message:
          "Please select where you want to add the block within the site preview",
        intent: "danger",
      });
      return;
    }
    const newBlockList = [
      ...blockList.slice(0, activeIndex),
      blockName,
      ...blockList.slice(activeIndex),
    ];

    setBlockList(newBlockList);
    setActiveIndex(activeIndex + 1);
  };

  const removeBlock = (index: number) => {
    const newBlockList = [
      ...blockList.slice(0, index),
      ...blockList.slice(index + 1),
    ];

    setBlockList(newBlockList);

    if (activeIndex > index) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div>
      <Head>
        <title>Site Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppContainer>
        <Toaster ref={toasterRef} />
        <BlockPicker addBlock={addBlock} />
        <Site
          activeIndex={activeIndex}
          blockList={blockList}
          removeBlock={removeBlock}
          setActiveIndex={setActiveIndex}
        />
      </AppContainer>
    </div>
  );
}
