/**
 * This hook is check user verify jwt (json web token). if user is not verify. user don't go to any private routes. like (don't purchase product, go to all order page, dashboard, etc);
 */

import { useEffect, useState } from "react";

const useToken = user => {
	const [token, setToken] = useState("");

	useEffect(() => {
		const email = user?.user?.email;
		const currentUser = { email: email };

		if (email) {
			fetch(`https://lukas-backend.vercel.app/user/${email}`, {
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(currentUser),
			})
				.then(res => res.json())
				.then(data => {
					const accessToken = data.token;
					localStorage.setItem("accessToken", accessToken);
					setToken(accessToken);
				});
		}
	}, [user]);

	return token;
};

export default useToken;
