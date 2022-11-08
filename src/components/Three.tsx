import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ReactThreeFiber } from "@react-three/fiber";
import React from "react";
import { angleToRadians } from "../utils/angleToRadians";

const Three = () => {
	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 1, 25]} />
			<OrbitControls />

			{/* Ball */}
			<mesh position={[0, 3, 0]} castShadow>
				<sphereGeometry args={[0.5, 32, 32]} />
				<meshStandardMaterial color='#ffffff' metalness={0.6} roughness={0.2} />
			</mesh>

			{/* Floor */}
			<mesh rotation={[-angleToRadians(45), 0, 0]} scale={[1, 1, 5]}>
				<planeGeometry args={[20, 20]} />
				<meshStandardMaterial color='#1ea3d8' />
			</mesh>

			<ambientLight args={["#fff", 1]} />
		</>
	);
};

export default Three;
