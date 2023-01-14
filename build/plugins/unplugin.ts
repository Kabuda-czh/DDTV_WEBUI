/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:59:26
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:02:06
 * @FilePath: \DDTV_WEBUI\build\plugins\unplugin.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
// import { getSrcPath } from "../utils";

// export default function unplugin(viteEnv: ImportMetaEnv) {
export default function unplugin() {
  // const srcPath = getSrcPath();

  return [
    Components({
      dts: "src/typings/components.d.ts",
      types: [{ from: "vue-router", names: ["RouterLink", "RouterView"] }],
      resolvers: [ElementPlusResolver()]
    })
  ];
}
