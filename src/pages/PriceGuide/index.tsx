import React from 'react';

import Screen1 from '../../Components/PriceGuide/Screen1';
import Screen2 from '../../Components/PriceGuide/Screen2';
import Screen3 from '../../Components/PriceGuide/Screen3';
import Screen4 from '../../Components/PriceGuide/Screen4';
import Screen5 from '../../Components/PriceGuide/Screen5';
import Screen6 from '../../Components/PriceGuide/Screen6';

function PriceGuide() {
	return (
		<>
			<div style={{ height: '50px' }}></div>
			<Screen1 />
			<div style={{ height: '200px' }}></div>
			<Screen2 />
			<div style={{ height: '150px' }}></div>
			<Screen3 />
			<div style={{ height: '100px' }}></div>
			<Screen4 />
			<Screen5 />
			<div style={{ height: '100px' }}></div>
			<hr />
			<div style={{ height: '100px' }}></div>
			<Screen6 />
		</>
	);
}

export default PriceGuide;
