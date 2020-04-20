import { put, call } from "redux-saga/effects";
import * as api from "../api/api";
import * as types from "../constants/actionTypes";
import { GetAPIRoutes } from "../utils/APIUtils";
let SERVICEAPI = GetAPIRoutes('dev-routes.json');
if(window.location.host == "domain-qa") {
  SERVICEAPI = GetAPIRoutes('qa-routes.json');
} else if(window.location.host == "domain-pp") {
  SERVICEAPI = GetAPIRoutes('pp-routes.json');
} else if(window.location.host == "domain1-prod") {
  SERVICEAPI = GetAPIRoutes('prod-routes.json');
} else {
  SERVICEAPI = GetAPIRoutes('dev-routes.json');
}
