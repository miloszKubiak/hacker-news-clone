import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Buttons = () => {
	const { isLoading, page, nbPages, handlePage } = useGlobalContext();

	return (
		<Container>
			<Button disabled={isLoading} onClick={() => handlePage("prev")}>prev</Button>
			<Pagination>
				{page + 1} of {nbPages}
			</Pagination>
			<Button disabled={isLoading} onClick={() => handlePage("next")}>next</Button>
		</Container>
	);
};

export default Buttons;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90vw;
	margin: 2rem auto;
`;

const Button = styled.button`
	margin: 1rem;
	padding: 0.4rem 1.2rem;
	font-weight: bold;
	text-transform: capitalize;
	border-radius: var(--radius);
	background: var(--color-primary);
	border: none;
	color: var(--color-white);
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
	}
`;

const Pagination = styled.p`
	font-weight: bold;
	font-size: 1.2rem;
	color: var(--color-font-secondary);
`;
