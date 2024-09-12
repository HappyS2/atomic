import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	/* 폰트연결 */

	@font-face {
		font-family: 'SUIT';
		src: url('/fonts/SUIT-Variable.woff2') format('woff2'), url('/fonts/SUIT-Variable.woff') format('woff'),
			url('/fonts/SUIT-Variable.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
	}
	@font-face {
		font-family: 'Arual';
		src: url('/fonts/Arual.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.fontArual{
		font-family: 'Arual', sans-serif;
	}

	/* 기본적인 리셋 */
	* {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
	}

	/* html 기본 설정 */
	html {
		font-size: 10px;
		scroll-behavior: smooth;
	}

	/* body 설정 */
	body {
		font-family: 'SUIT', sans-serif;
		margin: 0;
		padding: 0;
		min-height: 100vh; /* 최소 높이 설정 */
		font-size: 1.6rem;
	}

	/* 링크 기본 설정 */
	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	/* 이미지 및 비디오 반응형 설정 */
	img, video {
		max-width: 100%;
		height: auto;
		display: block;
	}

	/* 리스트 기본 설정 */
	ul, ol {
		list-style: none;
	}

	/* 폼 요소 초기화 */
	input, button, textarea, select {
		font: inherit;
		font-family: 'SUIT', sans-serif; 
		color: inherit;
	}

	button{
		cursor: pointer;
		background: transparent;
	}

	/* 기본적인 컨테이너 설정 */
	.wrapper {
		width: calc(100% - 6rem);
		max-width: 1400px;
		margin: 0 auto;
	}

	/* flex styles  */
	.flex{
		display: flex;
	}
	.flexWrap{
		flex-wrap: wrap;
	}
	/* item */
	.flexItemCenter{
		align-items: center;
	}
	.flexItemEnd{
		align-items: flex-end;
	}
	/* jusitfy */
	.flexJustifyCenter{
		justify-content: center;
	}
	.flexJustifyBetween{
		justify-content: space-between;
	}

	/* 색상 start */
	* > {
		.cl100 {
			color: ${(props) => props.theme.colors.txt100};
		}
		.cl200 {
			color: ${(props) => props.theme.colors.txt200};
		}
		.cl300 {
			color: ${(props) => props.theme.colors.txt300};
		}
		.cl400 {
			color: ${(props) => props.theme.colors.txt400};
		}
		.cl500 {
			color: ${(props) => props.theme.colors.txt500};
		}
		.cl600 {
			color: ${(props) => props.theme.colors.txt600};
		}
		.gray100{
				background: ${(props) => props.theme.colors.gray100};
		}
		.gray200{
				background: ${(props) => props.theme.colors.gray200};
		}
		.gray300{
				background: ${(props) => props.theme.colors.gray300};
		}
		.gray400{
				background: ${(props) => props.theme.colors.gray400};
		}
		.gray500{
				background: ${(props) => props.theme.colors.gray500};
		}
		.gray600{
				background: ${(props) => props.theme.colors.gray600};
		}
		.gray700{
				background: ${(props) => props.theme.colors.gray700};
		}
		.gray800{
				background: ${(props) => props.theme.colors.gray800};
		}
	}
	/* 색상 end */


	@media screen and (max-width:768px){
		
		.wrapper {
			width: calc(100% - 4rem);
		}

	}


`;
