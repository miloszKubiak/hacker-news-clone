import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Stories = () => {
	const { isLoading, hits, removeStory } = useGlobalContext();

	if (isLoading) {
		return (
			<Container>
				<Spinner />
			</Container>
		);
	}

	return (
		<AllStories>
			{hits.map((story) => {
				const { objectID, title, num_comments, url, points, author } =
					story;
				return (
					<SingleStory key={objectID}>
						<Title>{title}</Title>
						<Info>
							{points} points by <span>{author} | </span>
							{num_comments} comments
						</Info>
						<Links>
							<ReadMore href={url} target="_blank">
								read more
							</ReadMore>
							<RemoveBtn onClick={() => removeStory(objectID)}>
								remove
							</RemoveBtn>
						</Links>
					</SingleStory>
				);
			})}
		</AllStories>
	);
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

const AllStories = styled.section`
	display: grid;
	gap: 2rem;
	width: 90vw;
	max-width: var(--max-width);
	margin: 0 auto;
	margin-bottom: 4rem;

	@media screen and (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const SingleStory = styled.article`
	padding: 1rem 2rem;
	background: var(--color-white);
	border: 0.2rem solid #333;
	border-radius: var(--radius);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Title = styled.h4`
	line-height: 1.2;
	margin-bottom: 0.4rem;
`;

const Info = styled.p`
	color: var(--color-font-secondary);
	margin-bottom: 0.3rem;
`;

const Links = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ReadMore = styled.a`
	text-decoration: none;
	text-transform: capitalize;
	font-size: 0.9rem;
	margin-right: 1.1rem;
	color: var(--color-font-primary);
`;

const RemoveBtn = styled.button`
	text-transform: capitalize;
	border: none;
	background: transparent;
	color: #cf0b0b;
	font-size: 0.9rem;
	cursor: pointer;
`;
