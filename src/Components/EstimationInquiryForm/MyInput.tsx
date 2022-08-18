import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function MyInput({ name }: { name: string }) {
	const [value, setValue] = useState('');
	return (
		<TextField
			value={value}
			onChange={e => setValue(e.target.value)}
			variant="filled"
			label={name}
		/>
	);
}

export default MyInput;
