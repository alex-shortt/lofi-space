import { Suspense } from "react";
import Town from "models/Town";
import Lighting from "./components/Lighting";
import { Background, Fog, StandardEnvironment } from "spacesvr";
import { Color } from "three";

export default function Starter() {
  return (
    <>
      <StandardEnvironment
        playerProps={{ pos: [11.7, 1, 0], speed: 2.2, rot: Math.PI / 2 }}
        canvasProps={{ shadows: true }}
      >
        <Background color="white" />
        <Fog color={new Color("white")} near={10} far={100} />
        <Suspense fallback={null}>
          <Town />
        </Suspense>
        <Lighting />
      </StandardEnvironment>
      {/*<iframe*/}
      {/*  style={{*/}
      {/*    position: "absolute",*/}
      {/*    width: "100vw",*/}
      {/*    height: "100vh",*/}
      {/*    zIndex: 900,*/}
      {/*    opacity: 0,*/}
      {/*    pointerEvents: clicked ? "none" : "all",*/}
      {/*  }}*/}
      {/*  frameBorder="0"*/}
      {/*  allowFullScreen={true}*/}
      {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
      {/*  title="YouTube video player"*/}
      {/*  width="100%"*/}
      {/*  height="100%"*/}
      {/*  src="https://www.youtube.com/embed/b-EF93ebtyM?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Flofi.cafe&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=true&amp;color=black&amp;enablejsapi=1&amp;widgetid=1"*/}
      {/*  id="widget2"*/}
      {/*></iframe>*/}
    </>
  );
}
