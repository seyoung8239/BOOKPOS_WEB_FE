function FloatingKakao() {
	return (
		// <Fab
		// 	color="primary"
		// 	aria-label="add"
		// 	style={{
		// 		backgroundColor: 'none',
		// 		overflow: 'visible',
		// 	}}
		// >
		<a
			href="http://pf.kakao.com/_xetLHj"
			target="_blank"
			style={{
				position: 'fixed',
				bottom: '150px',
				right: '100px',
				width: '60px',
				height: '60px',
				borderRadius: '30px',
				boxShadow: '1px 2px rgba(0,0,0,0.2)',
			}} rel="noreferrer"
		>
			<img
				src="/img/floating_btn_kakao.png"
				width="60px"
				height="60px"
				alt=""
			/>
		</a>
		// </Fab>
	);
}

export default FloatingKakao;
