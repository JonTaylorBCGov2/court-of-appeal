import LandingPage from "@/components/home/LandingPage.vue";
import DashboardPage from "@/components/process/Dashboard.vue"
import { SessionManager } from "@/components/utils/utils";
import VueResource from 'vue-resource'
import store from "@/store"


async function authGuard(to: any, from: any, next: any) {
  var result = await SessionManager.getUserInfo(store);
  if (result.userId)
    next();
  else if (result.loginUrl)
    location.replace(result.loginUrl);
}

const routes = [
  {
    path: "/",
    component: LandingPage
  },
  {
    path: "/court-of-appeal",
    component: LandingPage
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardPage
  },
  // {
  //   path: "/status",
  //   name: "applicant-status",
  //   beforeEnter: authGuard,
  //   component: ApplicationStatus
  // },
];

export default routes;
