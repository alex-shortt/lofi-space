import { SpotLight, Vector3 } from "three";
import { useMemo } from "react";
import { Sky } from "@react-three/drei";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";

export default function Lighting() {
  const light = useMemo(() => new SpotLight(), []);
  light.castShadow = true;

  const sunPos = new Vector3(0, 0.9, 0.9);
  const pointLightPos = sunPos.clone().multiplyScalar(3);

  return (
    <group name="lighting">
      <ambientLight intensity={0.2} />
      <Sky sunPosition={sunPos} />
      <pointLight
        position={pointLightPos}
        intensity={2}
        distance={40}
        castShadow
        shadowBias={-0.0001}
      />
      <EffectComposer autoClear multisampling={0}>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          height={300}
          intensity={0.6}
        />
        <Noise opacity={0.3} />
      </EffectComposer>
    </group>
  );
}
