import { useCallback, useEffect, useState } from "react";

const useDimensions = (myRef) => {
	const getDimensions = useCallback(
		() => ({
			width: myRef.current.offsetWidth,
			height: myRef.current.offsetHeight,
		}),
		[myRef]
	);

	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const handleResize = () => {
			setDimensions(getDimensions());
		};

		if (myRef.current) {
			setDimensions(getDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [getDimensions, myRef]);

	return dimensions;
};

export default useDimensions;
