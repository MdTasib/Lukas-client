/**
 * This is CustomLink component. custom link works like ( navlink, link ). But the extra facility is an active route help to understand
 */

import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	const styled = {
		fontWeight: match ? "bold" : "",
		textDecoration: match ? "underline" : "",
	};

	return (
		<div>
			<Link style={styled} to={to} {...props}>
				{children}
			</Link>
		</div>
	);
}

export default CustomLink;
