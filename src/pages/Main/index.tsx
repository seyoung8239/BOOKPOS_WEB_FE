import React from 'react';

import Screen1 from '../../Components/Main/Screen1';
import Screen2 from '../../Components/Main/Screen2';
import Screen3 from '../../Components/Main/Screen3';
import Screen4 from '../../Components/Main/Screen4';

function Home() {
	return (
		<>
			<Screen1 />
			<Screen2 />
			<Screen3 />
			<Screen4 />
			<img
				src="/img/mainGraphic.png"
				alt=""
				style={{
					position: 'absolute',
					right: 0,
					top: 250,
					width: '40vw',
					zIndex: -1,
				}}
			/>
		</>
	);
}

export default Home;
