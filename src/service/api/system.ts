import { fetchApiByPost } from "./utils";

export function fetchSystemInfo() {
  return fetchApiByPost<ApiAuth.SystemInfo>("System_Info");
}

export function fetchSystemConfig() {
  return fetchApiByPost<ApiAuth.SystemConfig[]>("System_Config");
}
