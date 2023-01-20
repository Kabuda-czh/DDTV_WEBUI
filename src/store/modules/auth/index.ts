/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:34:24
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 14:30:05
 * @FilePath: \DDTV_WEBUI\src\store\modules\auth\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { useRouterPush } from "@/composables";
import { router } from "@/router";
import { fetchLogin } from "@/service";
import { clearAuthStorage, getUserInfo, setToken } from "@/utils";
import { defineStore } from "pinia";
import { unref } from "vue";
// import { useRouteStore } from "../route";
// import { useTabStore } from "../tab";

interface AuthState {
  /** 用户信息 */
  userInfo: Auth.UserInfo;
  /** 用户token */
  // token: string;
  /** 登录的加载状态 */
  loginLoading: boolean;
  /** 是否已经登陆 */
  isLogin: boolean;
}

export const useAuthStore = defineStore("auth-store", {
  state: (): AuthState => ({
    userInfo: getUserInfo(),
    // token: getToken(),
    loginLoading: false,
    isLogin: false
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.isLogin);
    }
  },
  actions: {
    /** 重置auth状态 */
    resetAuthStore() {
      const { toLogin } = useRouterPush(false);
      // const { resetTabStore } = useTabStore();
      // const { resetRouteStore } = useRouteStore();
      const route = unref(router.currentRoute);

      clearAuthStorage();
      this.$reset();

      // resetTabStore();
      // resetRouteStore();

      if (route.meta.requiresAuth) {
        toLogin();
      }
    },
    /**
     * 处理登录后成功或失败的逻辑
     * @param cookie - 返回的cookie
     */
    async handleActionAfterLogin(cookie: ApiAuth.Cookie) {
      const { toLoginRedirect } = useRouterPush(false);

      // const loginSuccess = await this.loginByToken(cookie);
      let loginSuccess = false;
      if (cookie) {
        setToken(cookie);
        this.isLogin = true;
        loginSuccess = true;
      }

      if (loginSuccess) {
        // 跳转登录后的地址
        toLoginRedirect();

        // 登录成功弹出欢迎提示
        window.$notification?.success({
          title: "登录成功!",
          message: `欢迎回来，${this.userInfo.userName}!`,
          duration: 3000
        });

        return;
      }

      // 不成功则重置状态
      this.resetAuthStore();
    },
    /**
     * 根据token进行登录
     * @param cookie - 返回的cookie
     */
    async loginByToken(cookie: ApiAuth.Cookie) {
      let successFlag = false;

      // 先把token存储到缓存中(后面接口的请求头需要token)
      // const { token, refreshToken } = backendToken;
      setToken(cookie);
      // setRefreshToken(refreshToken);

      // 获取用户信息
      // const { data } = await fetchUserInfo();
      // if (data) {
      // 成功后把用户信息存储到缓存中
      // setUserInfo(data);

      // 更新状态
      // this.userInfo = data;
      // this.token = token;
      this.isLogin = true;

      successFlag = true;
      // }

      return successFlag;
    },
    /**
     * 登录
     * @param userName - 用户名
     * @param password - 密码
     */
    async login(userName: string, password: string) {
      this.loginLoading = true;
      const { data } = await fetchLogin(userName, password);
      if (data) {
        await this.handleActionAfterLogin(data);
      }
      this.loginLoading = false;
    },
    /**
     * 更换用户权限(切换账号)
     * @param userRole
     */
    async updateUserRole(userRole: Auth.RoleType) {
      // const { resetRouteStore, initAuthRoute } = useRouteStore();

      const accounts: Record<Auth.RoleType, { userName: string; password: string }> = {
        super: {
          userName: "Super",
          password: "super123"
        },
        admin: {
          userName: "Admin",
          password: "admin123"
        },
        user: {
          userName: "User01",
          password: "user01123"
        }
      };
      const { userName, password } = accounts[userRole];
      const { data } = await fetchLogin(userName, password);
      if (data) {
        await this.loginByToken(data);
        // resetRouteStore();
        // initAuthRoute();
      }
    }
  }
});
