import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const SearchForm = () => {
	const { query, handleSearch } = useGlobalContext();

	return (
		<Form onSubmit={(e) => e.preventDefault()}>
			<Title>
				<i
					style={{ fontSize: "3rem" }}
					className="fab fa-hacker-news"
				></i>
				<p style={{ margin: "0 .8rem" }}>search hacker news</p>
			</Title>
			<Input
				type="text"
				value={query}
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</Form>
	);
};

export default SearchForm;

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	margin: 0 auto;
	margin-bottom: 2rem;
	background: var(--color-primary);

	@media screen and (max-width: 620px) {
		flex-direction: column;
	}
`;

const Title = styled.h2`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--color-white);
`;

const Input = styled.input`
	height: 2rem;
	width: 30%;
	padding: 1rem;
	max-width: var(--fixed-width);
	margin-bottom: 0.4rem;
	border: none;
	border-bottom: 0.2rem solid #666;
	outline: var(--color-white);
	color: var(--color-font-secondary);
	font-size: 1.1rem;

	@media screen and (max-width: 620px) {
		width: 60vw;
	}
`;
