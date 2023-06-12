import styled from 'styled-components';

export const SignInContainer = styled.div`
  	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
	margin: auto;
	box-sizing: border-box;
	height: 100vh;
	width: 100vw;
	z-index: 2;
	position: absolute;
	top:0px;
	left: 0px;

    .logo{
		position: absolute;
		top: 30vh;
        left: 20vw;

		h1{
			color: #2A3F66 !important;
			font-family: 'Patua One';
			font-weight: 400;
			font-size: 96px;
            font-style: normal;
            margin-top: 160px;
		}

        img {
            position: absolute;
            right: 10px;
            width: 179px;
            height: 172px;
        }
    }
`
export const FormBar = styled.div`
    position: absolute;
    width: 40vw;
    height: 100%;
    right: 0px;
    top: 0px;
    background: #5B7AB3;
    z-index: 2;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 36px;
        line-height: 44px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 40px;
    }

	form {
		display: flex;
		flex-direction: column;
		width: 420px;
		gap: 20px;
		margin-bottom: 20px;
	}
	input {
		padding-left: 8px;
		height: 55px;
        width: 100%;
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 6px;
		box-sizing: border-box;
		outline: none;
		&::placeholder {
			font-weight: 400;
			font-size: 22px;
			color: #9F9F9F;
			font-family: "Patua One";
		}
    }

    button {
		font-family: 'Patua One';
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		width: 100%;
		height: 55px;
		color: white;
		background-color: #2A3F66;
		border-radius: 6px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	p {
		margin-top: 17px;
		font-family: 'Lato';
		text-decoration: underline;
		font-size: 20px;
		color: white;
        text-align: center;
	}
`

