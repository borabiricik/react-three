import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

function App() {
	return (
		<Canvas id='three-canvas-container'>
			<Suspense fallback={null}></Suspense>
		</Canvas>
	);
}

export default App;
