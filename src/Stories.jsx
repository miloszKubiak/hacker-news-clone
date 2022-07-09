import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Stories = () => {
	const { isLoading } = useGlobalContext();

	if (isLoading) {
		return (
			<Container>
				<Spinner />
			</Container>
		);
	}

	return <div>Stories</div>;
};

export default Stories;

const Container = styled.div`
	position: relative;

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
`;

const Spinner = styled.div`
	height: 7rem;
	width: 7rem;
	margin: 0 auto;
	margin-top: 12rem;
	border-radius: 50%;
	border: 0.5rem solid var(--color-font-secondary);
	border-top-color: var(--color-primary);
	animation: spinner 0.6s linear infinite;
`;
