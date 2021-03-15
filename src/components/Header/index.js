import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 0;
  margin-bottom: 20px;
`;

const List = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	max-width: 960px;
	margin: 0 auto;
	list-style-type: none;
	padding: 16px 0;
`;

const ListItem = styled.div`
	a {
		color: #000000;
		font-size: 1.6rem;
		text-decoration: none;
		text-transform: uppercase;

		&:hover {
			color: #e7334d;
			transition: color 200ms;
		}
	}
`;

const Header = () => {
	return (
		<Container>            
			<List>
				<ListItem>
					<Link className="navItem" to="/new-music">New Music</Link>
				</ListItem>
				<ListItem>
					<Link className="navItem" to="/explore">Explore</Link>
				</ListItem>
				<ListItem>
					<Link className="navItem" to="/interviews">Interviews</Link>
				</ListItem>
				<ListItem>
					<Link className="navItem" to="/features">Features</Link>
				</ListItem>
			</List>
		</Container>
	);
};

export default Header;
