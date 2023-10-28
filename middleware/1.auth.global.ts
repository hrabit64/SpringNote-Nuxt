import {getUser} from "~/api/user";
import {
	getCurrentUser,
} from 'vuefire'

export default defineNuxtRouteMiddleware(async (to, from) => {
	if (process.server) {
		return;
	}

	// 로그인이 필요한 페이지 처리
	if (to.meta.requiresAuth === true) {
		const currentUser = await getCurrentUser();
		if(currentUser === null){
			throw showError({
				statusCode: 403,
				fatal: true,
				message: "로그인이 필요합니다."
			})
		} else {
			const userInfo = await getUser(currentUser!.uid);
			if(userInfo === null || !userInfo.admin){
				throw showError({
					statusCode: 403,
					fatal: true,
					message: "권한이 없습니다."
				})
			}
			console.log(userInfo);
		}
	}
});
